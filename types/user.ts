export type User = {
  login: string;
  password: string;
};

export type LoginRes = {
  data: {
    message: string;
    success: boolean;
  };
};
