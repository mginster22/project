import { ThemesContext, UserProfileContext } from "./../../contexts/index";

export const WithThemeContext = (InnerComponent) => (props) =>
  (
    <ThemesContext.Consumer>
      {([theme, setTheme]) => (
        <InnerComponent theme={theme} setTheme={setTheme} {...props} />
      )}
    </ThemesContext.Consumer>
  );

export const WithUser = (InnerComponent) => (props) =>
  (
    <UserProfileContext.Consumer>
      {(user) => <InnerComponent user={user} {...props} />}
    </UserProfileContext.Consumer>
  );

  