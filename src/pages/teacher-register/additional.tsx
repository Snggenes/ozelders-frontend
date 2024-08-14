import { FormInput } from "@/components/form-elements";
// import { useState } from "react";
// import { UploadWidget } from "@/components/upload-widget";
import { FormTextArea } from "@/components/form-elements";
import Heading from "@/components/heading";

export default function Additional({ form }: { form: any }) {
  // const [imageUrl, setImageUrl] = useState<string | null>(null);

  return (
    <div className="flex flex-col md:px-32  md:py-16 md:flex-row gap-4 md:m-6 w-full">
      <div className=" md:mr-16 md:w-full bg-rose-100 rounded-3xl flex flex-col md:order-1 order-2 p-6  ">
        <Heading title="Bilgi" classNameTitle=" text-5xl mb-6"></Heading>
        <div>
          <br />
          <p>
            Bu alanda profil resmi, tanıtım videosu ve kendinizi tanıtan bir
            yazı ekleyebilirsiniz.
          </p>
          <br />
          <p>
            Profil resmi ve video linki opsiyonel olup bu alanları boş
            bırakabilirsiniz.
          </p>
          <br />
          <p>
            Ancak öğrenciler genellikle fotoğrafı olan öğretmenleri tercih
            ettiklerinden profil fotoğrafı eklemenizi tavsiye ederiz.
          </p>
          <br />
          <p>
            Ayrıca video tanıtımı ekleyen öğretmenler de daha çok tercih
            edilmektedir.
          </p>
          <br />
          <p>
            Lütfen sadece youtube video linki ekleyiniz. Aksi takdirde videonuz
            sitede oynatılamayacaktır.
          </p>
          <br />
          <p>
            Bu bilgileri daha sonra da ekleyebilir veya düzenleyebilirsiniz.
          </p>
        </div>
      </div>

      <div className="flex flex-col p-12 w-full rounded-xl shadow-md md:order-2 order-1 ">
        <div className=" items-center justify-center flex">
          <div className="relative items-center">
            <img
              src="https://pomerancedentalcare.com/wp-content/uploads/2024/06/placeholder-image-person-jpg-1.jpg"
              alt="aji"
              className=" w-20 h-20 object-cover rounded-full"
            />
            <div
              onClick={() => {}}
              className="absolute -right-1 bottom-1 cursor-pointer  -ml-3  text-white p-1 text-xs bg-green-400 hover:bg-green-500 font-medium tracking-wider rounded-full transition ease-in duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-4 w-4"
              >
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
              </svg>
            </div>
          </div>
        </div>

        <div className="w-full text-center">
          {/* <UploadWidget setImageUrl={setImageUrl} /> */}
        </div>
        <FormInput
          placeholder="https://www.youtube.com/sizin-videonuz"
          label="Video Linki (Opsiyonel)"
          type="text"
          name="video"
          control={form.control}
        />
        <FormTextArea
          control={form.control}
          name="about"
          label="Hakkımda"
          placeholder="Kendinizden bahsedin"
        />
      </div>
    </div>
  );
}
