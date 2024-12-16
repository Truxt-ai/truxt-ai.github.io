import Link from 'next/link'
import Image from 'next/image'

interface LinkItem {
  label: string
  href: string
  iconPath?: string
}

interface FooterProps {
  border?: boolean
}

const footerLinks: LinkItem[] = [
  { label: 'Products', href: '/products' },
  { label: 'DevOpsGPT', href: '/devops-gpt' },
  { label: 'Truxt Gen AI', href: '/truxt-gen-ai' },
  { label: 'Contact Us', href: '/contact-us' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Sandbox', href: '/sandbox' },
]

const socialLinks: LinkItem[] = [
  { label: 'Linkedin', href: 'https://www.linkedin.com/company/truxt-ai/', iconPath: '/images/linkedin.png' },
  { label: 'Twitter', href: 'https://x.com/truxtai', iconPath: '/images/twitter.png' },
  { label: 'Youtube', href: 'https://www.youtube.com/@truxt-ai', iconPath: '/images/youtube.png' },
]

const Footer: React.FC<FooterProps> = ({ border = false }) => {
  return (
    <footer className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className={`grid gap-8 py-8 md:py-12 ${
            border ? 'border-t [border-image:linear-gradient(to_right,transparent,theme(colors.slate.200),transparent)1]' : ''
          }`}
        >
          <div className="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
            <div className="flex items-center space-x-2">
              <Image
                src="https://res.cloudinary.com/dqumxmkt7/image/upload/v1729240685/t2wtznrhjqi5yffsoacv.webp"
                alt="Truxt"
                width={32}
                height={32}
              />
              <div className="text-sm text-gray-600">&copy; Truxt.ai - All rights reserved.</div>
            </div>
            <div className="flex space-x-4 ">
              {socialLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  aria-label={link.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-500"
                >
                  <Image src={link.iconPath || ''} alt={link.label} width={24} height={24} />
                </Link>
              ))}
            </div>
          </div>

          <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-3">
            {footerLinks.map((link, index) => (
              <Link
                key={index}
                className="text-sm text-gray-600 transition hover:text-gray-900 flex items-center justify-center"
                href={link.href}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="relative -mt-16 h-60 w-full -z-10 overflow-hidden" aria-hidden="true">
        <div className="pointer-events-none absolute left-1/2 -z-10 -translate-x-1/2 text-center text-[20vw] sm:text-[348px] font-bold leading-none before:bg-gradient-to-b before:from-gray-200 before:to-gray-100/30 before:to-80% before:bg-clip-text before:text-transparent before:content-['Truxt'] after:absolute after:inset-0 after:bg-gray-300/70 after:bg-clip-text after:text-transparent after:mix-blend-darken after:content-['Truxt'] after:[text-shadow:0_1px_0_white]"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2/3" aria-hidden="true">
          <div className="h-56 w-56 rounded-full border-[20px] border-blue-700 blur-[80px] will-change-[filter]"></div>
        </div>
      </div>
    </footer>
  )
}

export default Footer