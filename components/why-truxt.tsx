import { Card, CardContent } from "@/components/ui/card"
import { Settings2, Truck } from "lucide-react"

export default function Component() {
  return (
    <section className="w-10/12 m-auto py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex items-center gap-2 mb-8">
          <span className="text-xl font-bold text-center bold uppercase tracking-wide text-gray-900">WHY CHOOSE US</span>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold tracking-tighter text-navy-900 md:text-4xl/tight">
              Nobody Knows Clients Like We Have Preferred
            </h2>
            <p className="text-gray-500 md:text-lg">
              Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor incididunt simply free ut labore
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <Card className="border-none shadow-none">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="rounded-lg p-3 bg-blue-50">
                      <Settings2 className="h-6 w-6 text-blue-900" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Certified Engineers</h3>
                  <p className="text-sm">
                    Lorem ipsum amet dolor sit amet lacus vel facilisis.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-none">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="rounded-lg p-3 bg-blue-50">
                      <Truck className="h-6 w-6 text-blue-900" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-navy-900">Delivery on time</h3>
                  <p className="text-sm text-gray-500">
                    Lorem ipsum amet dolor sit amet lacus vel facilisis.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <p className="text-gray-500">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </p>
          </div>
          
          <div className="relative">
            <div className="relative h-[600px] w-full overflow-hidden rounded-2xl">
              <img
                alt="Team member working"
                className="object-cover w-full h-full"
                src="https://static.wixstatic.com/media/cf9793_1dcf5895e918419a86fc88c21eea797f~mv2.jpeg/v1/fill/w_2940,h_1558,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/cf9793_1dcf5895e918419a86fc88c21eea797f~mv2.jpeg"
              />
              <div className="absolute bottom-6 left-6">
                <Card className="bg-white/90 backdrop-blur">
                  <CardContent className="flex items-center gap-3 p-4">
                    <div className="rounded-full bg-blue-50 p-2">
                      <svg
                        className=" w-6 h-6 text-blue-900"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 2 L15.09 8.26 L22 9.27 L17 14.14 L18.18 21.02 L12 17.77 L5.82 21.02 L7 14.14 L2 9.27 L8.91 8.26 L12 2" />
                      </svg>
                    </div>
                    <span className="font-semibold text-navy-900">Trusted By 9000 Clients</span>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 h-72 w-72 bg-rose-200 rounded-full -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}