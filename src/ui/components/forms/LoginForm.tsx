import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, type LoginFormData } from '@/core/utils/validations/auth';
import { useTranslation } from '@/core/hooks/useTranslation';

export default function LoginForm() {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <input
          {...register('email')}
          type="email"
          placeholder={t('auth.email')}
          className="w-full rounded border p-2"
        />
        {errors.email && (
          <span className="text-sm text-red-500">
            {t('auth.errors.invalidEmail')}
          </span>
        )}
      </div>
      <div>
        <input
          {...register('password')}
          type="password"
          placeholder={t('auth.password')}
          className="w-full rounded border p-2"
        />
        {errors.password && (
          <span className="text-sm text-red-500">
            {t('auth.errors.invalidPassword')}
          </span>
        )}
      </div>
      <button
        type="submit"
        className="w-full rounded bg-blue-500 px-4 py-2 text-white"
      >
        {t('auth.login')}
      </button>
    </form>
  );
}
