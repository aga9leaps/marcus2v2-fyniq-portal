'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  MOCK_APPLICATIONS,
  formatStatus,
  getStatusColor,
  type LoanApplication,
  type ApplicationStatus
} from '@/lib/mock-data';
import {
  Search,
  FileText,
  Clock,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Filter,
  Bell
} from 'lucide-react';

export default function DashboardPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<ApplicationStatus | 'all'>('all');

  // Filter applications
  const filteredApplications = MOCK_APPLICATIONS.filter((app) => {
    const matchesSearch =
      app.propertyAddress.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.loanType.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus = statusFilter === 'all' || app.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const getStatusIcon = (status: ApplicationStatus) => {
    switch (status) {
      case 'approved':
        return <CheckCircle2 className="w-5 h-5 text-success" />;
      case 'under_review':
        return <Clock className="w-5 h-5 text-info" />;
      case 'additional_info_needed':
        return <AlertCircle className="w-5 h-5 text-warning" />;
      default:
        return <FileText className="w-5 h-5 text-text-tertiary" />;
    }
  };

  const getStatusBadgeVariant = (status: ApplicationStatus) => {
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
      {/* Page Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-text-primary mb-2">
              Your Loan Applications
            </h1>
            <p className="text-text-secondary">
              Track the progress of your commercial real estate loan applications
            </p>
          </div>
          <Button
            className="bg-accent-primary hover:bg-accent-hover text-white"
            onClick={() => alert('➕ New Loan Application\n\nThis feature will allow you to:\n• Create a new loan application\n• Select loan type (Purchase, Refinance, Bridge, Construction)\n• Enter property and loan details\n• Start the document upload process\n\n📋 Status: Coming in Phase 2 - Backend Integration')}
          >
            <FileText className="w-4 h-4 mr-2" />
            New Application
          </Button>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="mb-6 flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-tertiary" />
          <Input
            type="text"
            placeholder="Search by property address, application ID, or loan type..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <Button
            variant={statusFilter === 'all' ? 'default' : 'outline'}
            onClick={() => setStatusFilter('all')}
            className={statusFilter === 'all' ? 'bg-accent-primary hover:bg-accent-hover' : ''}
          >
            All
          </Button>
          <Button
            variant={statusFilter === 'document_collection' ? 'default' : 'outline'}
            onClick={() => setStatusFilter('document_collection')}
            className={statusFilter === 'document_collection' ? 'bg-accent-primary hover:bg-accent-hover' : ''}
          >
            <Filter className="w-4 h-4 mr-1" />
            Active
          </Button>
          <Button
            variant={statusFilter === 'approved' ? 'default' : 'outline'}
            onClick={() => setStatusFilter('approved')}
            className={statusFilter === 'approved' ? 'bg-accent-primary hover:bg-accent-hover' : ''}
          >
            <CheckCircle2 className="w-4 h-4 mr-1" />
            Approved
          </Button>
        </div>
      </div>

      {/* Applications Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredApplications.map((application) => (
          <Card
            key={application.id}
            className="p-6 hover:shadow-lg transition-shadow cursor-pointer border border-border-subtle"
            onClick={() => router.push(`/dashboard/applications/${application.id}`)}
          >
            {/* Card Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start gap-3">
                {getStatusIcon(application.status)}
                <div>
                  <p className="text-sm font-medium text-text-tertiary mb-1">
                    {application.id}
                  </p>
                  <h3 className="text-lg font-semibold text-text-primary leading-tight">
                    {application.propertyAddress}
                  </h3>
                </div>
              </div>
              <Badge variant={getStatusBadgeVariant(application.status)}>
                {formatStatus(application.status)}
              </Badge>
            </div>

            {/* Loan Details */}
            <div className="grid grid-cols-2 gap-4 mb-4 py-4 border-t border-b border-border-subtle">
              <div>
                <p className="text-xs text-text-tertiary mb-1">Loan Amount</p>
                <p className="text-lg font-semibold text-text-primary">
                  {application.loanAmount}
                </p>
              </div>
              <div>
                <p className="text-xs text-text-tertiary mb-1">Loan Type</p>
                <p className="text-lg font-semibold text-text-primary">
                  {application.loanType}
                </p>
              </div>
            </div>

            {/* Document Progress */}
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm font-medium text-text-secondary">
                  Document Progress
                </p>
                <p className="text-sm font-semibold text-accent-primary">
                  {application.completionPercentage}%
                </p>
              </div>
              <div className="w-full bg-bg-secondary rounded-full h-2">
                <div
                  className="bg-accent-primary h-2 rounded-full transition-all"
                  style={{ width: `${application.completionPercentage}%` }}
                />
              </div>
              <div className="flex items-center justify-between mt-2 text-xs text-text-tertiary">
                <span>
                  {application.documentsApproved} of {application.documentsRequired} approved
                </span>
                <span>
                  {application.documentsSubmitted} submitted
                </span>
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between pt-4 border-t border-border-subtle">
              <div>
                <p className="text-xs text-text-tertiary">Last Updated</p>
                <p className="text-sm font-medium text-text-secondary">
                  {new Date(application.lastUpdated).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </p>
              </div>
              <Button
                variant="ghost"
                className="text-accent-primary hover:text-accent-hover hover:bg-accent-light"
                onClick={(e) => {
                  e.stopPropagation();
                  router.push(`/dashboard/applications/${application.id}`);
                }}
              >
                View Details
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            {/* Unread Messages Badge */}
            {application.messages.filter(m => !m.read).length > 0 && (
              <div className="mt-3 p-2 bg-info-light border border-border-subtle rounded-lg flex items-center gap-2">
                <Bell className="w-4 h-4 text-info" />
                <span className="text-sm text-info font-medium">
                  {application.messages.filter(m => !m.read).length} new message(s)
                </span>
              </div>
            )}
          </Card>
        ))}
      </div>

      {/* Empty State */}
      {filteredApplications.length === 0 && (
        <div className="text-center py-12">
          <FileText className="w-16 h-16 text-text-tertiary mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-text-primary mb-2">
            No applications found
          </h3>
          <p className="text-text-secondary">
            {searchQuery || statusFilter !== 'all'
              ? 'Try adjusting your search or filters'
              : 'You don\'t have any loan applications yet'}
          </p>
        </div>
      )}
    </div>
  );
}
