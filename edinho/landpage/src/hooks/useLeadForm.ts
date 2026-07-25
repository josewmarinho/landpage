import { useMemo, useState } from 'react';
import { maskPhone, onlyDigits } from '@/lib/mask';
import { LINKS } from '@/data/links';

// ─── Tipos ────────────────────────────────────────────────
export interface LeadFormState {
  name: string;
  city: string;
  whatsapp: string;
  message?: string;
  options: string[];
}

type Field = 'name' | 'city' | 'whatsapp' | 'message';

interface UseLeadFormArgs {
  availableOptions?: string[];
  requireOption?: boolean;
  waIntro?: string;
}

// ─── Hook: formulário de captação (sem backend — compõe WhatsApp) ──
export function useLeadForm({ availableOptions = [], requireOption = false, waIntro = 'Olá! Quero fazer parte da campanha.' }: UseLeadFormArgs = {}) {
  // Estados
  const [state, setState] = useState<LeadFormState>({
    name: '',
    city: '',
    whatsapp: '',
    message: '',
    options: [],
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Constantes derivadas
  const isValid = useMemo(() => {
    const hasName = state.name.trim().length >= 2;
    const hasCity = state.city.trim().length >= 2;
    const hasPhone = onlyDigits(state.whatsapp).length >= 10;
    const hasOption = !requireOption || state.options.length > 0;
    return hasName && hasCity && hasPhone && hasOption;
  }, [state, requireOption]);

  // Funções
  const setField = (field: Field, value: string) => {
    setState((prev) => ({
      ...prev,
      [field]: field === 'whatsapp' ? maskPhone(value) : value,
    }));
  };

  const toggleOption = (option: string) => {
    setState((prev) => ({
      ...prev,
      options: prev.options.includes(option)
        ? prev.options.filter((o) => o !== option)
        : [...prev.options, option],
    }));
  };

  const buildWhatsappUrl = () => {
    const lines = [
      waIntro,
      '',
      `*Nome:* ${state.name}`,
      `*Cidade:* ${state.city}`,
      `*WhatsApp:* ${state.whatsapp}`,
    ];
    if (state.message?.trim()) lines.push(`*Mensagem:* ${state.message}`);
    if (state.options.length) lines.push(`*Interesses:* ${state.options.join(', ')}`);
    const text = encodeURIComponent(lines.join('\n'));
    return `${LINKS.whatsapp}?text=${text}`;
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) {
      setError('Preencha nome, cidade e um WhatsApp válido para continuar.');
      return;
    }
    setError(null);
    window.open(buildWhatsappUrl(), '_blank', 'noopener');
    setSubmitted(true);
  };

  const reset = () => {
    setState({ name: '', city: '', whatsapp: '', message: '', options: [] });
    setSubmitted(false);
    setError(null);
  };

  return {
    state,
    submitted,
    error,
    isValid,
    availableOptions,
    setField,
    toggleOption,
    submit,
    reset,
  };
}
