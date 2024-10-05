declare global {
    interface Window {
        navigateTo: (path: string) => void;
    }
}
