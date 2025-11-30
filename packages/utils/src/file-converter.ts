export const fileToBase64 = async (
  file?: File
): Promise<string | ArrayBuffer | null | undefined> => {
  if (!file) return;
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};
