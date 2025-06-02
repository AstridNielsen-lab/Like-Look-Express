'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

// Zod schema for form validation
const resetPasswordSchema = z.object({
  password: z.string()
    .min(8, 'Senha deve ter pelo menos 8 caracteres')
    .regex(/[A-Z]/, 'Senha deve conter pelo menos uma letra maiúscula')
    .regex(/[a-z]/, 'Senha deve conter pelo menos uma letra minúscula')
    .regex(/[0-9]/, 'Senha deve conter pelo menos um número'),
  confirmPassword: z.string().min(1, 'Confirmação de senha é obrigatória'),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'As senhas não coincidem',
  path: ['confirmPassword'],
});

// Type for our form data
type ResetPasswordFormData = z.infer<typeof resetPasswordSchema>;

export default function ResetPasswordPage() {
  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  // Form states
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordFormData>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  });

  // Handle form submission
  const onSubmit = async (data: ResetPasswordFormData) => {
    try {
      if (!token) {
        setErrorMessage('Token de redefinição inválido ou expirado.');
        return;
      }

      setIsLoading(true);
      setErrorMessage('');
      setSuccessMessage('');

      // Simulating API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Simulating successful password reset
      setSuccessMessage('Sua senha foi redefinida com sucesso! Agora você pode fazer login com sua nova senha.');
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setErrorMessage('Ocorreu um erro ao redefinir sua senha. Tente novamente.');
    }
  };

  if (!token) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="flex justify-center">
            <Link href="/" className="flex items-center">
              <span className="text-3xl mr-2">🚚</span>
              <span className="text-2xl font-bold text-indigo-600">Like Look Express</span>
            </Link>
          </div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Link inválido
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            O link de redefinição de senha é inválido ou expirou.
          </p>
          <div className="mt-6 text-center">
            <Link href="/forgot-password" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
              Solicitar um novo link
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <Link href="/" className="flex items-center">
            <span className="text-3xl mr-2">🚚</span>
            <span className="text-2xl font-bold text-indigo-600">Like Look Express</span>
          </Link>
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Redefinir senha
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Crie uma nova senha para sua conta
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {/* Correios Partnership Badge */}
          <div className="mb-6 flex justify-center">
            <div className="bg-blue-50 text-blue-700 text-sm rounded-full px-3 py-1 flex items-center">
              <img 
                src="/correios-logo-small.png" 
                alt="Correios" 
                className="h-4 mr-2"
              />
              <span>Parceiro Oficial dos Correios</span>
            </div>
          </div>

          {errorMessage && (
            <div className="mb-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
              {errorMessage}
            </div>
          )}

          {successMessage && (
            <div className="mb-4 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-sm">
              {successMessage}
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Nova senha
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  type="password"
                  autoComplete="new-password"
                  className={`appearance-none block w-full px-3 py-2 border ${
                    errors.password ? 'border-red-300' : 'border-gray-300'
                  } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                  {...register('password')}
                />
                {errors.password && (
                  <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                Confirme sua nova senha
              </label>
              <div className="mt-1">
                <input
                  id="confirmPassword"
                  type="password"
                  autoComplete="new-password"
                  className={`appearance-none block w-full px-3 py-2 border ${
                    errors.confirmPassword ? 'border-red-300' : 'border-gray-300'
                  } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                  {...register('confirmPassword')}
                />
                {errors.confirmPassword && (
                  <p className="mt-1 text-sm text-red-600">{errors.confirmPassword.message}</p>
                )}
              </div>
            </div>

            <div className="text-sm text-gray-600">
              <p>Sua senha deve ter pelo menos:</p>
              <ul className="list-disc list-inside mt-1">
                <li>8 caracteres</li>
                <li>Uma letra maiúscula</li>
                <li>Uma letra minúscula</li>
                <li>Um número</li>
              </ul>
            </div>

            <div>
              <button
                type="submit"
                disabled={isLoading || !!successMessage}
                className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
                  isLoading || !!successMessage ? 'bg-indigo-400' : 'bg-indigo-600 hover:bg-indigo-700'
                } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
              >
                {isLoading ? 'Processando...' : 'Redefinir senha'}
              </button>
            </div>
          </form>

          {successMessage && (
            <div className="mt-6 text-center">
              <Link href="/login" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                Ir para o login
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

