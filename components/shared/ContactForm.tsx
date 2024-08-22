"use client"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { bookFormSchema } from "@/lib/validator"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Textarea } from "../ui/textarea"

const formSchema = z.object({
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
})

const ContactForm = () => {
    const form = useForm<z.infer<typeof bookFormSchema>>({
        resolver: zodResolver(bookFormSchema),
    })

    function onSubmit(values: z.infer<typeof bookFormSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }
  return (
    <Form {...form}>
      <form className="flex flex-col gap-[16px]" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input className="rounded-[8px] h-[44px] px-[16px] py-[10px] text-[14px] leading-[24px] font-normal" placeholder="Your Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="businessName"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input className="rounded-[8px] h-[44px] px-[16px] py-[10px] text-[14px] leading-[24px] font-normal" placeholder="Your Business Name" {...field} />
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
              <FormControl>
                <Input className="rounded-[8px] h-[44px] px-[16px] py-[10px] text-[14px] leading-[24px] font-normal" placeholder="Your Business Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phoneNo"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input className="rounded-[8px] h-[44px] px-[16px] py-[10px] text-[14px] leading-[24px] font-normal" placeholder="Your Phone Number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="more"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea className="rounded-[8px] h-[96px] px-[16px] py-[12px] text-[14px] leading-[24px] font-normal" placeholder="Type your message here..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="text-[16px] leading-[24px] font-medium bg-[#1D71B9] px-[16px] py-[10px] rounded-full w-fit" type="submit">Submit</Button>
      </form>
    </Form>
  )
}

export default ContactForm

