
import React from "react";

export default  class ErrorBoundary extends React.Component {
    constructor(props: any) {
        super(props);
        this.state =  {hasError: false};
    }

    static getDerivedStateFromError(_: any) {
        return { hasError: true };
    }

    componentDidCatch(error: any, errorInfo: any) {
        // We can log the error to an error reporting service
    }

    render() {
        // @ts-ignore
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return (
                <div className="flex justify-center text-3xl text-gray-600 mt-10">
                    <h1>Something went wrong.</h1>
                </div>
            );
        }

        return this.props.children;
    }
}