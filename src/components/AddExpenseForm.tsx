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
import AddExpenseIcon from '../assets/add-expense.png';
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
import { Select } from '@radix-ui/react-select';
import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from './ui/select';

const formSchema = z.object({
  amount: z.number({
    message: 'Amount cannot be empty',
  }),
  category: z.string({
    message: 'Category cannot be empty',
  }),
  description: z.string(),
});

type FormSchema = z.infer<typeof formSchema>;

const AddExpenseForm = () => {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      amount: 0.0,
      category: '',
      description: '',
    },
  });

  const onSubmit = (values: FormSchema) => {
    console.log(values);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="lg">
          <img src={AddExpenseIcon} alt="Add expense" width={30} height={30} />
          Add Expense
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Add expense</SheetTitle>
          <SheetDescription>Add expense</SheetDescription>
        </SheetHeader>
        <Form {...form}>
          <form
            id="add-expense-form"
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
                  <FormDescription>The amount you have spent</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} {...field}>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue
                          placeholder="Select a category"
                          ref={field.ref}
                        />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Category</SelectLabel>
                          <SelectItem value="food">Food</SelectItem>
                          <SelectItem value="fashion">Fashion</SelectItem>
                          <SelectItem value="household">Household</SelectItem>
                          <SelectItem value="gym">Gym</SelectItem>
                          <SelectItem value="housing">Housing</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormDescription>
                    The category where you have spent
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-darkslategrey">
                    Description
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Description" {...field} />
                  </FormControl>
                  <FormDescription>
                    The description of the spend
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit" form="add-expense-form">
              Save changes
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default AddExpenseForm;
