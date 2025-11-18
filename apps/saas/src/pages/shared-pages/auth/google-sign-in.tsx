import useGoogleSignInQuery from "@/lib/services/api/auth/google-sign-in.api";

export default function GoogleSignIn() {
  const { data } = useGoogleSignInQuery();
  console.log(data);
  return null;
}
