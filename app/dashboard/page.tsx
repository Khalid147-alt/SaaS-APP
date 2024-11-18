"use client";

import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { FileText, Upload, BarChart2, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { DashboardHeader } from "@/components/dashboard/header";
import { DashboardNav } from "@/components/dashboard/nav";
import { DocumentList } from "@/components/dashboard/document-list";
import { AnalyticsDashboard } from "@/components/dashboard/analytics";

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("documents");
  const [uploadProgress, setUploadProgress] = useState(0);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'application/pdf': ['.pdf'],
      'application/msword': ['.doc'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx']
    },
    onDrop: (acceptedFiles) => {
      // Simulate upload progress
      let progress = 0;
      const interval = setInterval(() => {
        progress += 10;
        setUploadProgress(progress);
        if (progress === 100) {
          clearInterval(interval);
          setTimeout(() => setUploadProgress(0), 1000);
        }
      }, 200);
    }
  });

  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader />
      
      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_1fr] md:gap-6 md:pt-6">
        <DashboardNav />
        
        <main className="flex w-full flex-1 flex-col overflow-hidden">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h2 className="text-2xl font-semibold tracking-tight">Dashboard</h2>
              <p className="text-sm text-muted-foreground">
                Manage your documents and view analytics
              </p>
            </div>
          </div>

          <div className="mt-8 space-y-4">
            <div {...getRootProps()} className={`
              border-2 border-dashed rounded-lg p-8 text-center
              ${isDragActive ? 'border-primary' : 'border-gray-300'}
              hover:border-primary transition-colors
            `}>
              <input {...getInputProps()} />
              <Upload className="mx-auto h-12 w-12 text-gray-400" />
              <p className="mt-2 text-sm text-muted-foreground">
                Drag & drop files here, or click to select files
              </p>
              {uploadProgress > 0 && (
                <Progress value={uploadProgress} className="mt-4" />
              )}
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-lg border p-4">
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  <h3 className="font-semibold">Total Documents</h3>
                </div>
                <p className="mt-2 text-2xl font-bold">24</p>
              </div>
              
              <div className="rounded-lg border p-4">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <h3 className="font-semibold">Processing Time Saved</h3>
                </div>
                <p className="mt-2 text-2xl font-bold">12.5 hrs</p>
              </div>
              
              <div className="rounded-lg border p-4">
                <div className="flex items-center gap-2">
                  <BarChart2 className="h-4 w-4" />
                  <h3 className="font-semibold">Usage This Month</h3>
                </div>
                <p className="mt-2 text-2xl font-bold">85%</p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <DocumentList />
              <AnalyticsDashboard />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}