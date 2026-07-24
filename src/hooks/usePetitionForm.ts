import { useMemo, useState } from 'react';
import { maskPhone, onlyDigits } from '@/lib/mask';
import { LINKS } from '@/data/links';
import { PETITION_GOAL } from '@/data/petition';

// ─── Hook: assinatura do abaixo-assinado ──────────────────
export function usePetitionForm() {
  // Estados
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [supports, setSupports] = useState(false);
  const [wantsUpdates, setWantsUpdates] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [signatures, setSignatures] = useState(PETITION_GOAL.current);

  // Constantes derivadas
  const isValid = useMemo(() => {
    return name.trim().length >= 2 && city.trim().length >= 2 && onlyDigits(whatsapp).length >= 10 && supports;
  }, [name, city, whatsapp, supports]);

  const progress = Math.min(Math.round((signatures / PETITION_GOAL.target) * 100), 100);

  // Funções
  const changeWhatsapp = (value: string) => setWhatsapp(maskPhone(value));

  const buildWhatsappUrl = () => {
    const lines = [
      'Assino o abaixo-assinado pela saúde do Noroeste Paulista.',
      '',
      `*Nome:* ${name}`,
      `*Cidade:* ${city}`,
      `*WhatsApp:* ${whatsapp}`,
      wantsUpdates ? '*Quero receber notícias da mobilização pelo WhatsApp.*' : '',
    ].filter(Boolean);
    return `${LINKS.whatsapp}?text=${encodeURIComponent(lines.join('\n'))}`;
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) {
      setError('Preencha nome, cidade, um WhatsApp válido e confirme o apoio à mobilização.');
      return;
    }
    setError(null);
    setSignatures((n) => n + 1);
    window.open(buildWhatsappUrl(), '_blank', 'noopener');
    setSubmitted(true);
  };

  const reset = () => {
    setName('');
    setCity('');
    setWhatsapp('');
    setSupports(false);
    setWantsUpdates(false);
    setSubmitted(false);
    setError(null);
  };

  return {
    name,
    city,
    whatsapp,
    supports,
    wantsUpdates,
    submitted,
    error,
    isValid,
    signatures,
    progress,
    setName,
    setCity,
    changeWhatsapp,
    setSupports,
    setWantsUpdates,
    submit,
    reset,
  };
}
