import "bootstrap/dist/css/bootstrap.css";
import buildClient from "../api/build-client";

const AppComponent = ({ Component, pageProps, currentUser }) => {
  return (
    <div>
      <h1>Header! {currentUser?.email}</h1>
      <Component {...pageProps} />
    </div>
  );
};

AppComponent.getInitialProps = async (appContext) => {
  const client = buildClient(appContext.ctx);
  const response = await client.get("/api/users/currentuser");

  let pageProps = {};
  if (appContext.Component.getInitialProps) {
    //개별 Page에 getInitialProps을 설정해놨을 경우 호출
    //이렇게 하지 않으면, _app.js에 있는 getInitialProps만 호출됨 (_app.js에 getInitialProps을 설정했으므로 우선 호출됨)
    pageProps = await appContext.Component.getInitialProps(appContext.ctx);
  }

  return {
    pageProps,
    ...response.data,
  };
};

export default AppComponent;
