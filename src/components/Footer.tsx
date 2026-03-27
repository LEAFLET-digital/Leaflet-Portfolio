import { Leaf, Github, Twitter, Linkedin } from 'lucide-react'

export const Footer = () => {
  return (
    <footer className="border-t border-leaflet-cyan/20 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="w-6 h-6 text-leaflet-cyan" />
              <span className="text-xl font-bold">Leaflet Studio</span>
            </div>
            <p className="text-gray-400 text-sm">
              Privacy-first AI social network. Your data, your device, your control.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-leaflet-cyan transition-colors">About</a></li>
              <li><a href="#" className="hover:text-leaflet-cyan transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-leaflet-cyan transition-colors">Security</a></li>
              <li><a href="#" className="hover:text-leaflet-cyan transition-colors">Documentation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-leaflet-cyan/10 flex items-center justify-center hover:bg-leaflet-cyan/20 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-leaflet-cyan/10 flex items-center justify-center hover:bg-leaflet-cyan/20 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-leaflet-cyan/10 flex items-center justify-center hover:bg-leaflet-cyan/20 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-leaflet-cyan/20 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Leaflet.Digital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
