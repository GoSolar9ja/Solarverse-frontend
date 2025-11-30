import { getDB, DatabaseKeyNames, DatabaseStoreNames } from ".";
export type GetInstallerDetailsType = {
  businessInfo: {
    firstName: string;
    lastName: string;
    businessName: string;
    businessRegNo: string;
    nin: string;
    businessAddress: string;
    businessLogo: File[][];
    gender: string;
    birthday: string;
    phoneNumber: string;
    otp: string;
  };
  businessDocs: {
    licenceOrCertification: File[][];
    cac?: File[][];
  };
};

export const storeInstallerDetails = async (
  details: GetInstallerDetailsType
) => {
  const db = await getDB();
  const existingDetails = await retrieveInstallerDetails();
  if (existingDetails) {
    await db.put(
      DatabaseStoreNames.INSTALLER_DETAILS,
      { ...existingDetails, ...details },
      DatabaseKeyNames.BUSINESS_DETAILS
    );
  } else {
    await db.put(
      DatabaseStoreNames.INSTALLER_DETAILS,
      details,
      DatabaseKeyNames.BUSINESS_DETAILS
    );
  }
};

export const retrieveInstallerDetails =
  async (): Promise<GetInstallerDetailsType> => {
    const db = await getDB();
    const retrievedDetails = await db.get(
      DatabaseStoreNames.INSTALLER_DETAILS,
      DatabaseKeyNames.BUSINESS_DETAILS
    );
    return retrievedDetails;
  };

export const clearInstallerDetails = async () => {
  const db = await getDB();
  await db.delete(
    DatabaseStoreNames.INSTALLER_DETAILS,
    DatabaseKeyNames.BUSINESS_DETAILS
  );
};
