class ApplicationError extends Error {
  public readonly message: string;
  public readonly statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    Object.assign(this, { message, statusCode });
  }
}

export { ApplicationError };
