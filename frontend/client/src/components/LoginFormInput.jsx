/* eslint-disable react/prop-types */
import { useFormContext } from "react-hook-form";
import { RiMailLine, RiEyeOffLine } from "react-icons/ri";
function LoginFormInput({
  placeholder,
  label,
  id,
  icon,
  isRequired,
  message,
  pattern,
  patternMessage
}) {
  const { register, formState } = useFormContext();
  const { errors } = formState;

  return (
    <div className="flex flex-col">
      <div className="relative flex items-center mb-2">
        <label
          htmlFor={id}
          className="absolute -top-3 left-2 px-1 bg-white text-gray-600 text-sm mx-2">
          {label}
        </label>
        <input
          type="text"
          name={id}
          id={id}
          className="block w-full px-5 py-3 text-base text-neutral-600 transition duration-500 ease-in-out rounded-lg bg-gray-50  border border-gray-300  focus:outline-none focus:border-blue-500"
          placeholder={placeholder}
          {...register(id, {
            required: {
              value: isRequired,
              message: message
            },
            pattern: {
              value: pattern,
              message: patternMessage
            }
          })}
        />
        <span className="absolute right-2 text-gray-400 text-lg">
          {icon === "email" ? <RiMailLine /> : <RiEyeOffLine />}
        </span>
      </div>

      {errors[id] && (
        <div className="mb-4">
          <span className="text-red-400">{errors[id].message}</span>
        </div>
      )}
    </div>
  );
}

export default LoginFormInput;
