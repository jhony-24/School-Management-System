class TokenFormatIsValid {
  getToken(token_bearer: string) {
    if (!token_bearer.includes('Bearer')) return null;

    const token = token_bearer.split(' ')[0];
    if (!token) {
      return null;
    }

    return token;
  }
}

export default TokenFormatIsValid;
