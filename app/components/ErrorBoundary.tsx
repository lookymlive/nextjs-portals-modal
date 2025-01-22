// components/ErrorBoundary.tsx
"use client";

import React from "react";

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export default class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

 static getDerivedStateFromError(error: Error): ErrorBoundaryState {
   console.error('Error occurred:', error);
   return { hasError: true };
 }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Error capturado por ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>¡Ups! Algo salió mal. Por favor, recarga la página.</h1>;
    }

    return this.props.children;
  }
}
