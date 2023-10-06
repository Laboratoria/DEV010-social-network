import login from '../src/components/login.js';

describe('login', () => {
  it('should be a function', () => {
    expect(typeof login).toBe('function');
  });
  it('should return a section element with a class name container', () => {
    expect(login().className).toBe('container');
  });
  it('should return a section element with a child element', () => {
    expect(login().children).toHaveLength(1);
  });
  it('should navigate to "/" when click homeImg', () => {
    const navigateTo = jest.fn();
    const section = login(navigateTo);
    const homeImg = section.querySelector('.iconImg');
    homeImg.click();
    expect(navigateTo).toHaveBeenCalledWith('/');
  });
  it('should navigate to "/register" when click registerAnchor', () => {
    const navigateTo = jest.fn();
    const section = login(navigateTo);
    const registerAnchor = section.querySelector('a');
    registerAnchor.click();
    expect(navigateTo).toHaveBeenCalledWith('/register');
  });
  it('should navigate to /forgotPassword when click passAnchor', () => {
    const navigateTo = jest.fn();
    const section = login(navigateTo);
    const passAnchor = section.querySelector('#passAnchor');
    passAnchor.click();
    expect(navigateTo).toHaveBeenCalledWith('/forgotPassword');
  });
  it('should navigate to /feed when click btnLoginGoogle its true', () => {
    const sigInWithGoogle = jest.fn(Promise.resolve(true));
    const navigateTo = jest.fn();
    const section = login(navigateTo);
    const btnLoginGoogle = section.querySelector('.btnGoogle');
    btnLoginGoogle.addEventListener('click', async () => {
      const user = await sigInWithGoogle();
      if (user) {
        navigateTo('/feed');
      }
    });
  });
  it('should execute sigInWithGoogle con event as arguments when click btnLoginGoogle', () => {
    const navigateTo = jest.fn();
    const section = login(navigateTo);
    const btnLoginGoogle = section.querySelector('.btnGoogle');
    const sigInWithGoogle = jest.fn();
    btnLoginGoogle.addEventListener('click', () => {
      sigInWithGoogle('event');
    });
    btnLoginGoogle.click();
    expect(sigInWithGoogle).toHaveBeenCalledWith('event');
  });
  it('should execute sigInWithEmail with email and password as arguments when click button', () => {
    const navigateTo = jest.fn();
    const section = login(navigateTo);
    const button = section.querySelector('.buttons');
    const sigInWithEmail = jest.fn();
    button.addEventListener('click', () => {
      sigInWithEmail('email', 'password');
    });
    button.click();
    expect(sigInWithEmail).toHaveBeenCalledWith('email', 'password');
  });
  it('should navigate to /feed if user is registered', () => {
    const navigateTo = jest.fn();
    localStorage.setItem('userRegistered', 'true');
    login(navigateTo);
    expect(navigateTo).toHaveBeenCalledWith('/feed');
  });
});
