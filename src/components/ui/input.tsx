import React, { forwardRef } from 'react';

type InputType = 'text' | 'email' | 'password' | 'tel' | 'url' | 'search' | 'number';

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  icon: React.ReactNode;
  placeholder: string;
  type?: InputType;
  className?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ icon, placeholder, type = 'text', className = '', ...props }, ref) => {
    return (
      <div className="relative mb-4">
        
        <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
          <div className="h-5 w-5 text-gray-400 flex items-center justify-center">
            {icon}
          </div>
        </div>
        
        <input 
          ref={ref}
          type={type}
          placeholder={placeholder}
          className={`w-full pl-14 pr-6 py-4 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-full focus:border-gray-300 focus:ring-2 focus:ring-gray-100 transition-all duration-200 focus:outline-none ${className}`}
          {...props}
        />
      </div>
    );
  }
);

Input.displayName = 'Input';

// Ícones SVG reutilizáveis
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

// Exemplos de uso do componente
export const InputExamples = () => {
  return (
    <div className="space-y-6 p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-6">Componente Input Reutilizável</h2>
      
      {/* Input de Email */}
      <Input
        icon={Icons.Email}
        type="email"
        placeholder="Digite seu email"
      />
      
      {/* Input de Senha */}
      <Input
        icon={Icons.Password}
        type="password"
        placeholder="Digite sua senha"
      />
      
      {/* Input de Nome */}
      <Input
        icon={Icons.User}
        type="text"
        placeholder="Digite seu nome completo"
      />
      
      {/* Input de Telefone */}
      <Input
        icon={Icons.Phone}
        type="tel"
        placeholder="Digite seu telefone"
      />
      
      {/* Input de Busca */}
      <Input
        icon={Icons.Search}
        type="search"
        placeholder="Buscar..."
      />
      
      {/* Input customizado com classes adicionais */}
      <Input
        icon={Icons.Email}
        type="email"
        placeholder="Email com estilo customizado"
        className="border-blue-200 focus:border-blue-400 focus:ring-blue-100"
      />
      
      {/* Exemplo com eventos */}
      <Input
        icon={Icons.User}
        type="text"
        placeholder="Digite algo..."
        onChange={(e) => console.log('Valor:', e.target.value)}
        onFocus={() => console.log('Input focado')}
        onBlur={() => console.log('Input desfocado')}
      />
    </div>
  );
};