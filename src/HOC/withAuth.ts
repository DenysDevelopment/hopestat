// import { useRouter } from "next/router";
// import { useEffect } from "react";

// const withAuth = <P extends object>(
//   WrappedComponent: React.ComponentType<P>,
//   allowedRoles: string[]
// ) => {
//   const Wrapper = (props: P) => {
//     const router = useRouter();
//     const userRole = "user"; // здесь необходимо получить роль пользователя из вашего хранилища состояний или API

//     useEffect(() => {
//       if (!allowedRoles.includes(userRole)) {
//         router.push("/401"); // перенаправляем пользователя на страницу 401 Unauthorized
//       }
//     }, []);

//     if (allowedRoles.includes(userRole)) {
//       return <WrappedComponent {...props} />;
//     } else {
//       return null;
//     }
//   };

//   return Wrapper;
// };

// export default withAuth;
