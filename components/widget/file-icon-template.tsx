import { cn } from "@/lib/utils";
import { SVGProps } from "react";
interface SvgComponentProps extends SVGProps<SVGSVGElement> {
  className?: string;
}

const CustomFileIcon = ({ className, ...props }: SvgComponentProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24' // Matches the desired 24x24 size
    width='24' // Explicitly set to match Tailwind's size-6
    height='24' // Explicitly set to match Tailwind's size-6
    fill='none'
    className={cn(className, "stroke-current")}
    {...props}
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.5} // Adjusted for smaller scale
      d='M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8L15 2Z'
    />
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.5}
      d='M14 2v4a2 2 0 0 0 2 2h4'
    />
    <path d='m7.53 11.67 5.2-2.88 5.2 2.88v6.03l-5.2 2.88-5.2-2.88v-6.03Z' />
    <path d='m14.45 10.26 2.49 4.3-2.49 4.3h-4.9l-2.49-4.3 2.49-4.3h4.9Z' />
    <circle cx={12} cy={15} r={2.5} />
    <path d='M12 10.6v-1.37M8.9 11.13l1.52.81M17.25 15.75l-1.3-.94M17.1 11.3l-1.22.77M9.6 15.34l-1.22.77' />
    <path strokeLinecap='round' d='m13 11.43-2.08 1.25' />
    <path d='M12 12.1v3.22M12 18.75v-1.37' />
  </svg>
);

export default function FileIconTemplate({ extension }: { extension: string }) {
  const colorMapper = {
    txt: "text-secondary",
    pdf: "text-red-600",
    docx: "text-blue-600",
    md: "text-foreground",
    json: "text-yellow-600",
    pptx: "text-yellow-600",
    csv: "text-green-600",
  };
  return (
    <div className='flex flex-col items-center justify-center pt-1'>
      <CustomFileIcon
        className={cn(
          Object.keys(colorMapper).includes(extension)
            ? colorMapper[extension as keyof typeof colorMapper]
            : "text-secondary"
        )}
      />
      <span
        className={cn(
          "text-[10px] font-semibold",
          cn(
            Object.keys(colorMapper).includes(extension)
              ? colorMapper[extension as keyof typeof colorMapper]
              : "text-secondary"
          )
        )}
      >
        {" "}
        {extension}
      </span>
    </div>
  );
}