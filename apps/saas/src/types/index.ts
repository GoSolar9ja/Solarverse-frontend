export type ApiResponseType<T = undefined> = T extends undefined
  ? {
      success: boolean;
      message: string;
      data: unknown;
    }
  : {
      success: boolean;
      message: string;
      data?: T;
    };
