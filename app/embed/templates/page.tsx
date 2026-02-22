export default function EmbedTemplates() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="text-center max-w-md">
        <div className="w-12 h-12 rounded-xl bg-kpoint-50 flex items-center justify-center mx-auto mb-4">
          <span className="text-kpoint-600 font-bold text-lg">K</span>
        </div>
        <h1 className="text-xl font-semibold text-gray-900 mb-2">
          Embeddable Templates
        </h1>
        <p className="text-sm text-gray-500 mb-4">
          This page will render a partner&apos;s template list in an embeddable
          format. Designed for iframe integration into partner portals.
        </p>
        <div className="inline-block px-3 py-1 rounded-full bg-yellow-100 text-yellow-800 text-xs font-medium">
          Coming Soon
        </div>
      </div>
    </div>
  );
}
