import { Button } from './ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet';
import AddIncomeIcon from '../assets/add-income.png';
import { Input } from './ui/input';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';

const formSchema = z.object({
  amount: z.number({
    message: 'Amount cannot be empty',
  }),
  source: z.string({
    message: 'Source cannot be empty',
  }),
});

type FormSchema = z.infer<typeof formSchema>;

const AddIncomeForm = () => {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      amount: 0.0,
      source: '',
    },
  });

  const onSubmit = (values: FormSchema) => {
    console.log(values);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="lg">
          <img src={AddIncomeIcon} alt="Add income" width={30} height={30} />
          Add Income
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>Add income</SheetTitle>
          <SheetDescription>Add income</SheetDescription>
        </SheetHeader>
        <Form {...form}>
          <form
            id="add-income-form"
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 text-darkslategrey"
          >
            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Amount</FormLabel>
                  <FormControl>
                    <Input placeholder="0.00" {...field} />
                  </FormControl>
                  <FormDescription>The amount you have got</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="source"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-darkslategrey">Source</FormLabel>
                  <FormControl>
                    <Input placeholder="Source" {...field} />
                  </FormControl>
                  <FormDescription>The source of the income</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit" form="add-income-form">
              Save changes
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default AddIncomeForm;
