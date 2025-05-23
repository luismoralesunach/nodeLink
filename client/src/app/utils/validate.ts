

export function isValidUrl(url: string): boolean {
    try {
      const parsed = new URL(url);
      return parsed.protocol === "http:" || parsed.protocol === "https:";
    } catch (_) {
      return false;
    }
  }
  

export function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

export function isValidPasswordandUsername(password:string):boolean{
    const passwordRegex = /^[a-zA-Z0-9]+$/;
    return passwordRegex.test(password)

}

export function isValidName(name: string): boolean {
    const nameRegex = /^[a-zA-Z\s\-]+$/;
    return nameRegex.test(name);
  }
  