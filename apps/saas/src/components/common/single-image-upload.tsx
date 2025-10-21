import { useRef } from "react";
import { Image, ComponentVisibility, UploadField } from "@solar-verse/ui";

interface SingleImageUploadProps {
  name: string;
  value: string;
  onChange: (base64: string) => void;
}

export const SingleImageUpload = ({ name, value, onChange }: SingleImageUploadProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
    });
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const base64 = await fileToBase64(file);
      onChange(base64);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div
      className="flex items-center justify-center w-[120px] h-[120px] rounded-[10px] border border-dashed border-[#C1C6C5] bg-[#F5F5F5] cursor-pointer hover:bg-gray-100 transition"
      onClick={handleClick}
    >
      {/* Hidden input we control */}
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        className="hidden"
        onChange={handleFileChange}
      />

      <ComponentVisibility visible={!value}>
        <UploadField
          containerProps={{ className: "flex-1" }}
          showUploadList={false}
          fieldProps={{
            name,
            multiple: false,
            accept: "image/*",
          }}
          
        />
      </ComponentVisibility>

      <ComponentVisibility visible={!!value}>
        <div className="w-full h-full rounded-full">
          <Image
            src={value}
            alt="Uploaded image"
            containerClassName="w-full h-full object-contain rounded-full"
          />
        </div>
      </ComponentVisibility>
    </div>
  );
};
 