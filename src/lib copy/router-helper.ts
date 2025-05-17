/**
 * Router Helper for SPA Routing
 * 
 * This file provides utilities to handle SPA routing edge cases
 * and ensure consistent navigation behavior.
 */

/**
 * Navigate to a route safely, avoiding direct page reloads
 * that would trigger 404 errors with SPA routing
 */
export function navigateTo(route: string): void {
  // Use History API to properly handle SPA navigation
  window.history.pushState({}, '', route);
  
  // Dispatch a custom event to notify the app of navigation
  const navigationEvent = new Event('navigation');
  window.dispatchEvent(navigationEvent);
}

/**
 * Handle external links to ensure they work correctly with SPA routing
 */
export function setupLinkInterceptor(): void {
  document.addEventListener('click', (e) => {
    // Find closest anchor tag if the click was on a child element
    const target = e.target as HTMLElement;
    const anchor = target.tagName === 'A' 
      ? target as HTMLAnchorElement
      : target.closest('a') as HTMLAnchorElement;
    
    if (!anchor) return;
    
    // Only intercept internal links that should use client-side routing
    const href = anchor.getAttribute('href');
    if (
      href && 
      href.startsWith('/') && 
      !href.startsWith('/api/') &&
      !anchor.getAttribute('target') &&
      !anchor.getAttribute('download') &&
      !e.ctrlKey && 
      !e.metaKey
    ) {
      e.preventDefault();
      navigateTo(href);
    }
  });
}

/**
 * Initialize all router helpers
 */
export function initializeRouterHelpers(): void {
  setupLinkInterceptor();
  
  // Handle back/forward navigation
  window.addEventListener('popstate', () => {
    const navigationEvent = new Event('navigation');
    window.dispatchEvent(navigationEvent);
  });
}
