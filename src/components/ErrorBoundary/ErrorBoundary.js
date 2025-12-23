import React from 'react';
import './ErrorBoundary.css';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import RefreshIcon from '@mui/icons-material/Refresh';
import HomeIcon from '@mui/icons-material/Home';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false,
      error: null,
      errorInfo: null
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  handleReload = () => {
    window.location.reload();
  };

  handleGoHome = () => {
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className='error-boundary'>
          <div className='error-content'>
            <div className='error-icon-wrapper'>
              <ErrorOutlineIcon className='error-icon' />
              <div className='error-glow'></div>
            </div>

            <h1 className='error-title'>Oops! Something went wrong</h1>
            <p className='error-message'>
              We encountered an unexpected error. Don't worry, it's not your fault!
            </p>

            <div className='error-actions'>
              <button 
                className='error-btn primary' 
                onClick={this.handleReload}
                aria-label="Reload page"
              >
                <RefreshIcon />
                <span>Reload Page</span>
              </button>
              <button 
                className='error-btn secondary' 
                onClick={this.handleGoHome}
                aria-label="Go to home"
              >
                <HomeIcon />
                <span>Go Home</span>
              </button>
            </div>

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className='error-details'>
                <summary>Error Details (Development Only)</summary>
                <pre className='error-stack'>
                  {this.state.error.toString()}
                  {this.state.errorInfo?.componentStack}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

