export function getHeaderPayload() {
  return {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      refresh_token: localStorage.getItem('refresh_token'),
    },
  };
}

export function updateSessionToken(token, refreshToken) {
  localStorage.setItem('token', token);
  localStorage.setItem('refresh_token', refreshToken);
}
