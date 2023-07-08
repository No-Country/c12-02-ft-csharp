function LoginFormSubmit({ content }) {
  return (
    <button
      type="submit"
      className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transhtmlForm bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
      {content}
    </button>
  );
}
export default LoginFormSubmit;
