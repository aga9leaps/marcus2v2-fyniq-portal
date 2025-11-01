'use client';

import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import {
  Upload,
  FileText,
  CheckCircle2,
  XCircle,
  File,
  X,
  AlertCircle
} from 'lucide-react';

interface DocumentUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  documentName?: string;
  documentCategory?: string;
  onUploadComplete?: (files: File[]) => void;
}

interface UploadedFile {
  file: File;
  preview?: string;
  status: 'pending' | 'uploading' | 'success' | 'error';
  progress?: number;
  error?: string;
}

export default function DocumentUploadModal({
  isOpen,
  onClose,
  documentName = 'Document',
  documentCategory = 'General',
  onUploadComplete,
}: DocumentUploadModalProps) {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [isUploading, setIsUploading] = useState(false);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const newFiles = acceptedFiles.map((file) => ({
      file,
      preview: file.type.startsWith('image/') ? URL.createObjectURL(file) : undefined,
      status: 'pending' as const,
      progress: 0,
    }));
    setUploadedFiles((prev) => [...prev, ...newFiles]);
  }, []);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragReject,
  } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'application/msword': ['.doc'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
      'application/vnd.ms-excel': ['.xls'],
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx'],
      'image/jpeg': ['.jpg', '.jpeg'],
      'image/png': ['.png'],
    },
    maxSize: 25 * 1024 * 1024, // 25MB
  });

  const removeFile = (index: number) => {
    setUploadedFiles((prev) => {
      const file = prev[index];
      if (file.preview) {
        URL.revokeObjectURL(file.preview);
      }
      return prev.filter((_, i) => i !== index);
    });
  };

  const simulateUpload = async (fileIndex: number) => {
    // Simulate upload progress
    for (let progress = 0; progress <= 100; progress += 20) {
      await new Promise((resolve) => setTimeout(resolve, 200));
      setUploadedFiles((prev) =>
        prev.map((f, i) =>
          i === fileIndex
            ? { ...f, status: 'uploading', progress }
            : f
        )
      );
    }

    // Mark as success
    setUploadedFiles((prev) =>
      prev.map((f, i) =>
        i === fileIndex
          ? { ...f, status: 'success', progress: 100 }
          : f
      )
    );
  };

  const handleUpload = async () => {
    setIsUploading(true);

    try {
      // Simulate upload for each file
      for (let i = 0; i < uploadedFiles.length; i++) {
        if (uploadedFiles[i].status === 'pending') {
          await simulateUpload(i);
        }
      }

      // Wait a moment to show success state
      await new Promise((resolve) => setTimeout(resolve, 500));

      // Call callback with files
      if (onUploadComplete) {
        onUploadComplete(uploadedFiles.map((f) => f.file));
      }

      // Close modal after successful upload
      setTimeout(() => {
        handleClose();
      }, 1000);
    } catch (error) {
      console.error('Upload error:', error);
    } finally {
      setIsUploading(false);
    }
  };

  const handleClose = () => {
    // Clean up previews
    uploadedFiles.forEach((file) => {
      if (file.preview) {
        URL.revokeObjectURL(file.preview);
      }
    });
    setUploadedFiles([]);
    onClose();
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
  };

  const getFileIcon = (file: File) => {
    if (file.type.includes('pdf')) return <FileText className="w-8 h-8 text-error" />;
    if (file.type.includes('word')) return <FileText className="w-8 h-8 text-info" />;
    if (file.type.includes('excel') || file.type.includes('sheet')) return <FileText className="w-8 h-8 text-success" />;
    return <File className="w-8 h-8 text-text-tertiary" />;
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl">Upload Document</DialogTitle>
          <DialogDescription>
            {documentName && documentCategory && (
              <div className="mt-2">
                <p className="text-sm font-medium text-text-primary">
                  {documentName}
                </p>
                <p className="text-xs text-text-tertiary">
                  Category: {documentCategory}
                </p>
              </div>
            )}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Dropzone */}
          <div
            {...getRootProps()}
            className={`
              border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors
              ${isDragActive ? 'border-accent-primary bg-accent-light' : 'border-border-medium bg-bg-secondary'}
              ${isDragReject ? 'border-error bg-error-light' : ''}
              hover:border-accent-primary hover:bg-accent-light/50
            `}
          >
            <input {...getInputProps()} />
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 bg-accent-light rounded-full flex items-center justify-center">
                <Upload className="w-8 h-8 text-accent-primary" />
              </div>
              {isDragActive ? (
                <div>
                  <p className="text-lg font-semibold text-accent-primary">
                    Drop files here
                  </p>
                  <p className="text-sm text-text-secondary mt-1">
                    Release to upload
                  </p>
                </div>
              ) : (
                <div>
                  <p className="text-lg font-semibold text-text-primary">
                    Drag & drop files here
                  </p>
                  <p className="text-sm text-text-secondary mt-1">
                    or click to browse
                  </p>
                </div>
              )}
              <div className="mt-2 text-xs text-text-tertiary">
                <p>Supported formats: PDF, Word, Excel, Images</p>
                <p>Maximum file size: 25MB</p>
              </div>
            </div>
          </div>

          {/* File List */}
          {uploadedFiles.length > 0 && (
            <div className="space-y-3">
              <Label className="text-sm font-semibold text-text-primary">
                Selected Files ({uploadedFiles.length})
              </Label>
              <div className="space-y-2 max-h-64 overflow-y-auto">
                {uploadedFiles.map((uploadedFile, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-surface border border-border-subtle rounded-lg"
                  >
                    {/* File Icon */}
                    {uploadedFile.preview ? (
                      <img
                        src={uploadedFile.preview}
                        alt={uploadedFile.file.name}
                        className="w-12 h-12 object-cover rounded"
                      />
                    ) : (
                      getFileIcon(uploadedFile.file)
                    )}

                    {/* File Info */}
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-text-primary truncate">
                        {uploadedFile.file.name}
                      </p>
                      <p className="text-xs text-text-tertiary">
                        {formatFileSize(uploadedFile.file.size)}
                      </p>

                      {/* Progress Bar */}
                      {uploadedFile.status === 'uploading' && (
                        <div className="mt-2">
                          <div className="w-full bg-bg-secondary rounded-full h-1.5">
                            <div
                              className="bg-accent-primary h-1.5 rounded-full transition-all"
                              style={{ width: `${uploadedFile.progress}%` }}
                            />
                          </div>
                        </div>
                      )}

                      {/* Error Message */}
                      {uploadedFile.status === 'error' && uploadedFile.error && (
                        <div className="mt-1 flex items-center gap-1 text-xs text-error">
                          <AlertCircle className="w-3 h-3" />
                          {uploadedFile.error}
                        </div>
                      )}
                    </div>

                    {/* Status Icon */}
                    <div>
                      {uploadedFile.status === 'pending' && (
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeFile(index)}
                          disabled={isUploading}
                        >
                          <X className="w-4 h-4" />
                        </Button>
                      )}
                      {uploadedFile.status === 'uploading' && (
                        <div className="w-8 h-8 flex items-center justify-center">
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-accent-primary" />
                        </div>
                      )}
                      {uploadedFile.status === 'success' && (
                        <CheckCircle2 className="w-6 h-6 text-success" />
                      )}
                      {uploadedFile.status === 'error' && (
                        <XCircle className="w-6 h-6 text-error" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <DialogFooter>
          <Button
            variant="outline"
            onClick={handleClose}
            disabled={isUploading}
          >
            Cancel
          </Button>
          <Button
            onClick={handleUpload}
            disabled={uploadedFiles.length === 0 || isUploading}
            className="bg-accent-primary hover:bg-accent-hover"
          >
            {isUploading ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                Uploading...
              </>
            ) : (
              <>
                <Upload className="w-4 h-4 mr-2" />
                Upload {uploadedFiles.length > 0 && `(${uploadedFiles.length})`}
              </>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
