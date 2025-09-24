export const formatPhoneNumber = (phoneNumber: string) => {
  return (
    "+234" +
    (phoneNumber.length > 10 ? phoneNumber.replace(/^\d/, "") : phoneNumber)
  );
};
