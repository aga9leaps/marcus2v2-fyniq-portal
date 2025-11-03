'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  getApplicationById,
  formatStatus,
  getStatusColor,
  type DocumentStatus
} from '@/lib/mock-data';
import {
  ArrowLeft,
  FileText,
  Upload,
  CheckCircle2,
  XCircle,
  Clock,
  AlertCircle,
  Calendar,
  DollarSign,
  Building2,
  User,
  Mail,
  Phone,
  Download,
  MessageSquare,
  Trash2,
  RefreshCw
} from 'lucide-react';

export default function ApplicationDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('overview');
  const application = getApplicationById(params.id);

  if (!application) {
    return (
      <div className="text-center py-12">
        <FileText className="w-16 h-16 text-text-tertiary mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-text-primary mb-2">
          Application Not Found
        </h2>
        <p className="text-text-secondary mb-6">
          The application you're looking for doesn't exist.
        </p>
        <Button onClick={() => router.push('/dashboard')}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Dashboard
        </Button>
      </div>
    );
  }

  const getDocumentStatusIcon = (status: DocumentStatus) => {
    switch (status) {
      case 'approved':
        return <CheckCircle2 className="w-5 h-5 text-success" />;
      case 'rejected':
      case 'resubmit_requested':
        return <XCircle className="w-5 h-5 text-error" />;
      case 'under_review':
        return <Clock className="w-5 h-5 text-info" />;
      case 'uploaded':
        return <FileText className="w-5 h-5 text-info" />;
      default:
        return <AlertCircle className="w-5 h-5 text-text-tertiary" />;
    }
  };

  const getDocumentStatusBadgeVariant = (status: DocumentStatus): 'default' | 'destructive' | 'outline' | 'secondary' => {
    const color = getStatusColor(status);
    const variantMap: Record<string, 'default' | 'destructive' | 'outline' | 'secondary'> = {
      success: 'default',
      error: 'destructive',
      warning: 'outline',
      info: 'secondary',
      secondary: 'outline',
    };
    return variantMap[color] || 'secondary';
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-6">
        <Button
          variant="ghost"
          onClick={() => router.push('/dashboard')}
          className="mb-4"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Applications
        </Button>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p className="text-sm text-text-tertiary mb-1">{application.id}</p>
            <h1 className="text-3xl font-bold text-text-primary">
              {application.propertyAddress}
            </h1>
          </div>
          <Badge variant={getDocumentStatusBadgeVariant(application.status as any)} className="self-start">
            {formatStatus(application.status)}
          </Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-4 mb-6">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="documents">
                Documents
                {application.documentsRequired - application.documentsSubmitted > 0 && (
                  <span className="ml-2 px-2 py-0.5 bg-warning text-white text-xs rounded-full">
                    {application.documentsRequired - application.documentsSubmitted}
                  </span>
                )}
              </TabsTrigger>
              <TabsTrigger value="activity">Activity</TabsTrigger>
              <TabsTrigger value="messages">
                Messages
                {application.messages.filter(m => !m.read).length > 0 && (
                  <span className="ml-2 px-2 py-0.5 bg-error text-white text-xs rounded-full">
                    {application.messages.filter(m => !m.read).length}
                  </span>
                )}
              </TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview">
              <Card className="p-6">
                <h2 className="text-xl font-semibold text-text-primary mb-6">
                  Application Overview
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <DollarSign className="w-4 h-4 text-text-tertiary" />
                      <p className="text-sm text-text-tertiary">Loan Amount</p>
                    </div>
                    <p className="text-2xl font-bold text-text-primary">
                      {application.loanAmount}
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Building2 className="w-4 h-4 text-text-tertiary" />
                      <p className="text-sm text-text-tertiary">Loan Type</p>
                    </div>
                    <p className="text-2xl font-bold text-text-primary">
                      {application.loanType}
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="w-4 h-4 text-text-tertiary" />
                      <p className="text-sm text-text-tertiary">Submitted Date</p>
                    </div>
                    <p className="text-lg font-semibold text-text-secondary">
                      {new Date(application.submittedDate).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="w-4 h-4 text-text-tertiary" />
                      <p className="text-sm text-text-tertiary">Last Updated</p>
                    </div>
                    <p className="text-lg font-semibold text-text-secondary">
                      {new Date(application.lastUpdated).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </p>
                  </div>
                </div>

                {/* Document Progress */}
                <div className="pt-6 border-t border-border-subtle">
                  <h3 className="text-lg font-semibold text-text-primary mb-4">
                    Document Progress
                  </h3>
                  <div className="mb-3">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm font-medium text-text-secondary">
                        Overall Completion
                      </p>
                      <p className="text-lg font-bold text-accent-primary">
                        {application.completionPercentage}%
                      </p>
                    </div>
                    <div className="w-full bg-bg-secondary rounded-full h-3">
                      <div
                        className="bg-accent-primary h-3 rounded-full transition-all"
                        style={{ width: `${application.completionPercentage}%` }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mt-4">
                    <div className="text-center p-4 bg-surface border border-border-subtle rounded-lg">
                      <p className="text-2xl font-bold text-text-primary">
                        {application.documentsApproved}
                      </p>
                      <p className="text-sm text-text-tertiary">Approved</p>
                    </div>
                    <div className="text-center p-4 bg-surface border border-border-subtle rounded-lg">
                      <p className="text-2xl font-bold text-text-primary">
                        {application.documentsSubmitted - application.documentsApproved}
                      </p>
                      <p className="text-sm text-text-tertiary">Under Review</p>
                    </div>
                    <div className="text-center p-4 bg-surface border border-border-subtle rounded-lg">
                      <p className="text-2xl font-bold text-text-primary">
                        {application.documentsRequired - application.documentsSubmitted}
                      </p>
                      <p className="text-sm text-text-tertiary">Pending</p>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>

            {/* Documents Tab */}
            <TabsContent value="documents">
              <div className="space-y-4">
                {application.documents.map((document) => (
                  <Card key={document.id} className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4 flex-1">
                        {getDocumentStatusIcon(document.status)}
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-lg font-semibold text-text-primary">
                              {document.name}
                            </h3>
                            <Badge variant={getDocumentStatusBadgeVariant(document.status)}>
                              {formatStatus(document.status)}
                            </Badge>
                            {document.required && (
                              <Badge variant="outline" className="text-error border-error">
                                Required
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-text-tertiary mb-3">
                            {document.category}
                          </p>

                          {document.uploadedDate && (
                            <div className="grid grid-cols-2 gap-4 text-sm mb-3">
                              <div>
                                <span className="text-text-tertiary">Uploaded:</span>{' '}
                                <span className="text-text-secondary font-medium">
                                  {new Date(document.uploadedDate).toLocaleDateString()}
                                </span>
                              </div>
                              {document.reviewedDate && (
                                <div>
                                  <span className="text-text-tertiary">Reviewed:</span>{' '}
                                  <span className="text-text-secondary font-medium">
                                    {new Date(document.reviewedDate).toLocaleDateString()}
                                  </span>
                                </div>
                              )}
                              {document.fileSize && (
                                <div>
                                  <span className="text-text-tertiary">Size:</span>{' '}
                                  <span className="text-text-secondary font-medium">
                                    {document.fileSize}
                                  </span>
                                </div>
                              )}
                              {document.fileType && (
                                <div>
                                  <span className="text-text-tertiary">Type:</span>{' '}
                                  <span className="text-text-secondary font-medium">
                                    {document.fileType}
                                  </span>
                                </div>
                              )}
                            </div>
                          )}

                          {document.notes && (
                            <div className="p-3 bg-surface border-l-4 border-l-warning border border-border-subtle rounded-lg">
                              <p className="text-sm text-text-primary">
                                <strong>Note:</strong> {document.notes}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="flex gap-2">
                        {document.status === 'pending' ? (
                          <Button
                            size="sm"
                            className="bg-accent-primary hover:bg-accent-hover"
                            onClick={() => alert('Upload Document\n\nThis will open the document upload modal where you can:\n• Drag and drop files\n• Select multiple documents\n• See upload progress\n• Confirm successful upload\n\nStatus: Fully functional in Phase 1')}
                          >
                            <Upload className="w-4 h-4 mr-2" />
                            Upload
                          </Button>
                        ) : (
                          <>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => alert('Download Document\n\nThis feature will allow you to:\n• Download the document to your device\n• View document in browser\n• Share document link\n\nStatus: Coming in Phase 2 - Backend Integration')}
                            >
                              <Download className="w-4 h-4 mr-2" />
                              Download
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => alert('Replace Document\n\nThis feature will allow you to:\n• Upload a new version of this document\n• Keep version history\n• Add notes about the replacement\n\nStatus: Coming in Phase 2 - Backend Integration')}
                            >
                              <RefreshCw className="w-4 h-4 mr-2" />
                              Replace
                            </Button>
                            {!document.required && (
                              <Button
                                size="sm"
                                variant="outline"
                                className="text-error border-error hover:bg-error-light"
                                onClick={() => {
                                  if (confirm(`Delete Document\n\nAre you sure you want to delete "${document.name}"?\n\nThis action cannot be undone.\n\nClick OK to confirm deletion.`)) {
                                    alert('Document Deleted\n\nThis feature will:\n• Permanently remove the document\n• Update application status\n• Log the deletion in activity timeline\n\nStatus: Coming in Phase 2 - Backend Integration');
                                  }
                                }}
                              >
                                <Trash2 className="w-4 h-4 mr-2" />
                                Delete
                              </Button>
                            )}
                          </>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Activity Tab */}
            <TabsContent value="activity">
              <Card className="p-6">
                <h2 className="text-xl font-semibold text-text-primary mb-6">
                  Recent Activity
                </h2>
                <div className="space-y-4">
                  {application.activity.map((activity, index) => (
                    <div
                      key={activity.id}
                      className={`flex gap-4 pb-4 ${
                        index !== application.activity.length - 1 ? 'border-b border-border-subtle' : ''
                      }`}
                    >
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-accent-light rounded-full flex items-center justify-center">
                          {activity.type === 'document_uploaded' && <Upload className="w-5 h-5 text-accent-primary" />}
                          {activity.type === 'document_approved' && <CheckCircle2 className="w-5 h-5 text-success" />}
                          {activity.type === 'document_rejected' && <XCircle className="w-5 h-5 text-error" />}
                          {activity.type === 'status_change' && <Clock className="w-5 h-5 text-info" />}
                          {activity.type === 'comment_added' && <MessageSquare className="w-5 h-5 text-accent-primary" />}
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-text-primary">
                          {activity.description}
                        </p>
                        <p className="text-xs text-text-tertiary mt-1">
                          {activity.user} • {new Date(activity.timestamp).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>

            {/* Messages Tab */}
            <TabsContent value="messages">
              <div className="space-y-4">
                {application.messages.map((message) => (
                  <Card
                    key={message.id}
                    className={`p-6 ${!message.read ? 'border-l-4 border-l-accent-primary bg-accent-light/20' : ''}`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-lg font-semibold text-text-primary mb-1">
                          {message.subject}
                        </h3>
                        <p className="text-sm text-text-tertiary">
                          From: {message.from} • {new Date(message.timestamp).toLocaleString()}
                        </p>
                      </div>
                      {!message.read && (
                        <Badge className="bg-accent-primary">New</Badge>
                      )}
                    </div>
                    <p className="text-text-secondary leading-relaxed">
                      {message.body}
                    </p>
                  </Card>
                ))}

                {application.messages.length === 0 && (
                  <Card className="p-12 text-center">
                    <MessageSquare className="w-12 h-12 text-text-tertiary mx-auto mb-4" />
                    <p className="text-text-secondary">No messages yet</p>
                  </Card>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Loan Officer Card */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-text-primary mb-4">
              Your Loan Officer
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-accent-light rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-accent-primary" />
                </div>
                <div>
                  <p className="font-semibold text-text-primary">
                    {application.loanOfficer.name}
                  </p>
                  <p className="text-sm text-text-tertiary">Loan Officer</p>
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-border-subtle">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-text-tertiary" />
                  <a
                    href={`mailto:${application.loanOfficer.email}`}
                    className="text-sm text-accent-primary hover:text-accent-hover"
                  >
                    {application.loanOfficer.email}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-text-tertiary" />
                  <a
                    href={`tel:${application.loanOfficer.phone}`}
                    className="text-sm text-accent-primary hover:text-accent-hover"
                  >
                    {application.loanOfficer.phone}
                  </a>
                </div>
              </div>

              <Button
                className="w-full bg-accent-primary hover:bg-accent-hover mt-4"
                onClick={() => alert('Message functionality coming in Phase 2')}
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </div>
          </Card>

          {/* Quick Actions */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-text-primary mb-4">
              Quick Actions
            </h3>
            <div className="space-y-2">
              <Button
                variant="outline"
                className="w-full justify-start"
                onClick={() => alert('Upload modal will open (Phase 1 - mock)')}
              >
                <Upload className="w-4 h-4 mr-2" />
                Upload Documents
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start"
                onClick={() => alert('Download functionality coming in Phase 2')}
              >
                <Download className="w-4 h-4 mr-2" />
                Download All
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
