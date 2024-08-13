"use client";

import React, { useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import axios from "axios";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { sendEmail } from "@/lib/utils";

import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export const formSchema = z.object({
  name: z.string().min(2).max(60),
  email: z.string().email(),
  message: z.string().min(2).max(500),
});

export const ContactButton = () => {
  const [submit, setSubmit] = useState("");
  const { executeRecaptcha } = useGoogleReCaptcha();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const handleSubmit = async (data: z.infer<typeof formSchema>) => {
    setSubmit("Submitting...");
    console.log(data);

    if (!executeRecaptcha) {
      console.error("reCAPTCHA not available");
      setSubmit("Error: reCAPTCHA not available");
      return;
    }

    try {
      const gRecaptchaToken = await executeRecaptcha("inquirySubmit");

      const response = await axios({
        method: "post",
        url: "/api/recaptchaSubmit",
        data: {
          gRecaptchaToken,
        },
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
      });

      if (response?.data?.success === true) {
        console.log(`Success with score: ${response?.data?.score}`);
        // Call sendEmail if reCAPTCHA is successful
        try {
          await sendEmail(data).then((res) => console.log("email sent", res));
          setSubmit("Form submitted successfully!");
        } catch (error) {
          console.error("Error sending email:", error);
          setSubmit("Error submitting form. Please try again later.");
        }
      } else {
        console.error(`Failure with score: ${response?.data?.score}`);
        setSubmit("Failed to verify reCAPTCHA! You must be a robot!");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmit("Error submitting form. Please try again later.");
    }
  };

  //TODO: Customise form as desired

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="mt-4 " type="button" variant={"default"}>
          Contact
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Contact</DialogTitle>
          <DialogDescription>
            Complete the form below to reach out!{" "}
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            className="flex flex-col gap-4"
            onSubmit={form.handleSubmit(handleSubmit)}
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Enter your message"
                      {...field}
                      className="resize-none rounded-md border border-gray-300 p-2 focus:ring-cyan-600 focus:ring-2 focus:ring-opacity-50"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* ALERT: This legal note must remain in the form as the site is using reCAPTCHA */}
            <p className="text-xs text-gray-400">
              This site is protected by reCAPTCHA and the Google{" "}
              <a
                className="text-accent underline"
                href="https://policies.google.com/privacy"
              >
                Privacy Policy
              </a>{" "}
              and{" "}
              <a
                className="text-accent underline"
                href="https://policies.google.com/terms"
              >
                Terms of Service
              </a>{" "}
              apply.
            </p>
            <Button className="mt-4" type="submit" variant={"default"}>
              {submit || "Send"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
