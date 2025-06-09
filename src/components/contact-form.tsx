"use client";

import { submitForm } from "@/app/_actions";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircle, Loader2 } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

// Define the form schema with Zod
const contactFormSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  phone: z
    .string()
    .min(10, "Le numéro de téléphone doit contenir au moins 10 caractères"),
  ville: z.string().min(2, "La ville doit contenir au moins 2 caractères"),
  email: z.string().email("Veuillez entrer une adresse email valide"),
  details: z
    .string()
    .min(10, "Le message doit contenir au moins 10 caractères"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactForm() {
  const [success, setSuccess] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    clearErrors,
    setError,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      ville: "",
      email: "",
      details: "",
    },
    mode: "onSubmit",
    reValidateMode: "onSubmit",
  });

  const onSubmit = async (data: ContactFormValues) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("phone", data.phone);
    formData.append("ville", data.ville);
    formData.append("email", data.email);
    formData.append("details", data.details);

    try {
      const result = await submitForm(formData);
      if (result.success) {
        setSuccess("Votre message a été envoyé avec succès !");
        // Clear success message after 5 seconds
        setTimeout(() => {
          setSuccess(null);
          reset();
        }, 5000);
      }
    } catch {
      setError("root.serverError", {
        message:
          "Une erreur est survenue lors de l'envoi du message. Veuillez réessayer.",
      });

      // Clear server error after 5 seconds
      setTimeout(() => {
        clearErrors("root.serverError");
      }, 5000);
    }
  };

  const errorMessages = useMemo(() => 
    errors?.root?.serverError
      ? []
      : Object.values(errors).map((error) => error.message),
    [errors]
  );

  // Hide errors after 5 seconds
  useEffect(() => {
    if (errorMessages.length > 0) {
      const timer = setTimeout(() => {
        clearErrors();
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [errorMessages, isSubmitting, clearErrors]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 translate-y-[40px] opacity-0">
      {errorMessages.length > 0 && (
        <Alert className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <AlertCircle className="size-4" />
          <AlertTitle>Veuillez corriger les erreurs suivantes :</AlertTitle>
          <AlertDescription>
            <ul className="list-disc list-inside">
              {errorMessages.map((message, index) => (
                <li key={index}>{message}</li>
              ))}
            </ul>
          </AlertDescription>
        </Alert>
      )}

      {errors?.root?.serverError && (
        <Alert className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <AlertCircle className="size-4" />
          <AlertTitle>Erreur</AlertTitle>
          <AlertDescription>{errors.root.serverError.message}</AlertDescription>
        </Alert>
      )}

      {success && (
        <Alert className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <AlertCircle />
          <AlertTitle>Succès</AlertTitle>
          <AlertDescription>{success}</AlertDescription>
        </Alert>
      )}

      <div className="group relative w-full">
        <Input
          type="text"
          {...register("name", { required: true })}
          placeholder="Votre Nom"
          className={cn(
            "h-12 border-2 border-border bg-background/60 font-figtree px-4 text-[1em] text-foreground shadow-sm transition-all disabled:opacity-85",
            "autofill:bg-background autofill:text-foreground"
          )}
        />
      </div>

      <div className="group relative w-full">
        <Input
          type="text"
          {...register("phone", { required: true })}
          placeholder="Votre Numéro de Téléphone"
          className={cn(
            "h-12 border-2 border-border bg-background/60 font-figtree px-4 text-[1em] text-foreground shadow-sm transition-all disabled:opacity-85",
            "autofill:bg-background autofill:text-foreground"
          )}
        />
      </div>

      <div className="group relative w-full">
        <Input
          type="email"
          {...register("email", { required: true })}
          placeholder="Votre Email"
          className={cn(
            "h-12 border-2 border-border bg-background/60 font-figtree px-4 text-[1em] text-foreground shadow-sm transition-all disabled:opacity-85",
            "autofill:bg-background autofill:text-foreground"
          )}
        />
      </div>

      <div className="group relative w-full">
        <Input
          type="text"
          {...register("ville", { required: true })}
          placeholder="Ville"
          className={cn(
            "h-12 border-2 border-border bg-background/60 font-figtree px-4 text-[1em] text-foreground shadow-sm transition-all disabled:opacity-85",
            "autofill:bg-background autofill:text-foreground"
          )}
        />
      </div>

      <div className="group relative w-full">
        <Textarea
          {...register("details", { required: true })}
          placeholder="Décrivez ici votre projet de décoration : (ville, besoin etc)"
          rows={10}
          cols={30}
          className={cn(
            "min-h-37.5 border-2 border-border bg-background/60 font-figtree px-4 py-4 text-[1em] text-foreground shadow-sm transition-all disabled:opacity-85"
          )}
        />
      </div>

      <div className="w-full mb-12 lg:mb-0">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="mt-5 relative w-full h-auto border px-7.5 py-3.75 rounded-full font-figtree text-[15px] leading-none capitalize text-white border-white/30 bg-white/10 before:content-[''] before:w-full before:h-full before:bg-inherit before:absolute before:inset-0 before:backdrop-blur-[2.4px] before:rounded-full before:mix-blend-[initial] before:border before:border-white/30 hover:bg-secondary hover:text-secondary-foreground shadow-sm"
        >
          <div className="relative flex items-center gap-2">
            {isSubmitting && <Loader2 className="animate-spin mr-2" />}
            Envoyer la Demande
          </div>
        </Button>
      </div>
    </form>
  );
}
