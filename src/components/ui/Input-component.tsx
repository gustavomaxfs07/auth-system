import React, { forwardRef, useState } from 'react';

type InputType = 'text' | 'email' | 'password' | 'tel' | 'url' | 'search' | 'number';

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  icon: React.ReactNode;
  placeholder: string;
  type?: InputType;
  className?: string;
  required?: boolean;
  errorMessage?: string;
  onValidationChange?: (isValid: boolean) => void;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ 
    icon, 
    placeholder, 
    type = 'text', 
    className = '', 
    required = false,
    errorMessage = 'Este campo é obrigatório',
    onValidationChange,
    onBlur,
    onChange,
    ...props 
  }, ref) => {
    const [hasError, setHasError] = useState(false);
    const [value, setValue] = useState('');
    const [touched, setTouched] = useState(false);

    const validateField = (currentValue: string) => {
      const isEmpty = currentValue.trim() === '';
      const isInvalid = required && isEmpty && touched;
      
      setHasError(isInvalid);
      
      if (onValidationChange) {
        onValidationChange(!isInvalid);
      }
      
      return !isInvalid;
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setTouched(true);
      validateField(e.target.value);
      
      if (onBlur) {
        onBlur(e);
      }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setValue(newValue);
      
      // Se o campo já foi tocado, valida em tempo real
      if (touched) {
        validateField(newValue);
      }
      
      if (onChange) {
        onChange(e);
      }
    };

    return (
      <div className="relative mb-7">
        <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
          <div className={`h-5 w-5 flex items-center justify-center transition-colors duration-200 ${
            hasError ? 'text-red-500' : 'text-gray-400'
          }`}>
            {icon}
          </div>
        </div>
        
        <input 
          ref={ref}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`w-full pl-14 pr-6 py-4 text-gray-700 placeholder-gray-400 bg-white border rounded-full focus:ring-2 transition-all duration-200 focus:outline-none ${
            hasError 
              ? 'border-red-300 focus:border-red-400 focus:ring-red-100' 
              : 'border-gray-200 focus:border-gray-300 focus:ring-gray-100'
          } ${className}`}
          {...props}
        />
        
        {hasError && (
          <div className="absolute left-6 mt-1 text-sm text-red-500 flex items-center">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            {errorMessage}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export const Icons = {
  Email: (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth="1.5" 
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  ),
  
  Password: (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth="1.5" 
        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
      />
    </svg>
  ),
  
  User: (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth="1.5" 
        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
      />
    </svg>
  ),
  
  Phone: (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth="1.5" 
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    </svg>
  ),
  
  Search: (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth="1.5" 
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  ),
};

export const InputExamples = () => {
  const [formValid, setFormValid] = useState({
    email: false,
    password: false,
    name: false,
    phone: false
  });

  const handleValidationChange = (field: string) => (isValid: boolean) => {
    setFormValid(prev => ({ ...prev, [field]: isValid }));
  };

  const handleSubmit = () => {
    const allValid = Object.values(formValid).every(valid => valid);
    
    if (allValid) {
      alert('Formulário válido! ✅');
    } else {
      alert('Por favor, preencha todos os campos obrigatórios! ❌');
    }
  };

  return (
    <div className="space-y-6 p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-6">Componente Input com Validação</h2>
      
      <div className="space-y-6">
        {/* Input de Email - OBRIGATÓRIO */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email *
          </label>
          <Input
            icon={Icons.Email}
            type="email"
            placeholder="Digite seu email"
            required={true}
            errorMessage="Email é obrigatório"
            onValidationChange={handleValidationChange('email')}
          />
        </div>
        
        {/* Input de Senha - OBRIGATÓRIO */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Senha *
          </label>
          <Input
            icon={Icons.Password}
            type="password"
            placeholder="Digite sua senha"
            required={true}
            errorMessage="Senha é obrigatória"
            onValidationChange={handleValidationChange('password')}
          />
        </div>
        
        {/* Input de Nome - OBRIGATÓRIO */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Nome Completo *
          </label>
          <Input
            icon={Icons.User}
            type="text"
            placeholder="Digite seu nome completo"
            required={true}
            errorMessage="Nome é obrigatório"
            onValidationChange={handleValidationChange('name')}
          />
        </div>
        
        {/* Input de Telefone - OBRIGATÓRIO com mensagem customizada */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Telefone *
          </label>
          <Input
            icon={Icons.Phone}
            type="tel"
            placeholder="Digite seu telefone"
            required={true}
            errorMessage="Por favor, informe seu número de telefone"
            onValidationChange={handleValidationChange('phone')}
          />
        </div>
        
        {/* Input de Busca - OPCIONAL */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Buscar (opcional)
          </label>
          <Input
            icon={Icons.Search}
            type="search"
            placeholder="Buscar..."
            required={false}
          />
        </div>
        
        {/* Input customizado - OPCIONAL */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email secundário (opcional)
          </label>
          <Input
            icon={Icons.Email}
            type="email"
            placeholder="Email secundário"
            className="border-blue-200 focus:border-blue-400 focus:ring-blue-100"
            required={false}
          />
        </div>

        {/* Botão de Submit */}
        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 text-white py-4 px-6 rounded-full font-medium hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Enviar Formulário
        </button>
      </div>
      
      {/* Status de validação */}
      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <h3 className="font-medium text-gray-700 mb-2">Status da Validação:</h3>
        <div className="space-y-1 text-sm">
          <div className={`flex items-center ${formValid.email ? 'text-green-600' : 'text-red-600'}`}>
            <span className="w-2 h-2 rounded-full bg-current mr-2"></span>
            Email: {formValid.email ? 'Válido' : 'Inválido'}
          </div>
          <div className={`flex items-center ${formValid.password ? 'text-green-600' : 'text-red-600'}`}>
            <span className="w-2 h-2 rounded-full bg-current mr-2"></span>
            Senha: {formValid.password ? 'Válido' : 'Inválido'}
          </div>
          <div className={`flex items-center ${formValid.name ? 'text-green-600' : 'text-red-600'}`}>
            <span className="w-2 h-2 rounded-full bg-current mr-2"></span>
            Nome: {formValid.name ? 'Válido' : 'Inválido'}
          </div>
          <div className={`flex items-center ${formValid.phone ? 'text-green-600' : 'text-red-600'}`}>
            <span className="w-2 h-2 rounded-full bg-current mr-2"></span>
            Telefone: {formValid.phone ? 'Válido' : 'Inválido'}
          </div>
        </div>
      </div>
    </div>
  );
};