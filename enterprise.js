// ✅ FIX: enterpriseDownloadBtn was missing from HTML — wrapped in null check to prevent crash
const enterpriseDownloadBtn = document.getElementById('enterpriseDownloadBtn');

if (enterpriseDownloadBtn) {
  enterpriseDownloadBtn.addEventListener('click', function (e) {
    e.preventDefault();
    const htmlContent = '<!DOCTYPE html>\n' + document.documentElement.outerHTML;
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'enterprise-software-section.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  });
}
