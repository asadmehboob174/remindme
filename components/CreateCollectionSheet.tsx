import { FC } from 'react'
import { Sheet, SheetContent, SheetDescription, SheetHeader } from './ui/sheet'
import { useForm } from 'react-hook-form'
import { CreateCollectionSchema, createCollectionSchemaType } from '@/schema/createCollection';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from './ui/form';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { CollectionColor, CollectionColors } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { Separator } from './ui/separator';
import { Button } from './ui/button';

interface CreateCollectionSheetProps {
  open : boolean,
  onOpenChange : (open : boolean) => void
}

const CreateCollectionSheet: FC<CreateCollectionSheetProps> = ({open, onOpenChange}) => {

  const form = useForm<createCollectionSchemaType>({
    resolver: zodResolver(CreateCollectionSchema),
    defaultValues : {
      
    },
  });

  const onSubmit = (data : createCollectionSchemaType) => {
    console.log(data);
    // form.reset();
    // onOpenChange(false);
  
  }

  const openChangeWrapper = (open : boolean) => {
    form.reset();
    onOpenChange(open);
  }

  return (
    <Sheet open={open} onOpenChange={openChangeWrapper}>
      <SheetContent>
        <SheetHeader>Add new Collecttion</SheetHeader>
        <SheetDescription>
          Collections are a way to group you tasks
        </SheetDescription>
        <Form {...form}>
           <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4 flex flex-col'>
              <FormField
                 control={form.control}
                 name="name"
                 render={({field}) => (
                   <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                         <Input placeholder='Personal' {...field} />
                      </FormControl>
                      <FormDescription>Collection name</FormDescription>
                      <FormMessage />
                   </FormItem>
                 )}
              />
              <FormField
                 control={form.control}
                 name="color"
                 render={({field}) => (
                   <FormItem>
                      <FormLabel>Color</FormLabel>
                      <FormControl>
                         <Select onValueChange={color => field.onChange(color)}>
                            <SelectTrigger className={cn(`w-full h-9`, CollectionColors[field.value as CollectionColor])}>
                               <SelectValue placeholder="Color" className='w-full h-9' ></SelectValue>
                            </SelectTrigger>
                            <SelectContent className='w-full'>
                                {
                                  Object.keys(CollectionColors).map((color, index) => (
                                    <SelectItem key={color} value={color} className={
                                      cn(`cursor-pointer w-full rounded-md my-1 text-neutral-700 focus:text-neutral-600
                                      focus:font-bold focus:ring-2 ring-neutral-600 focus:ring-inset
                                      dark:focus:ring-white focus:text-md transition-all duration-100 dark:text-white dark:focus:text-white`, 
                                      CollectionColors[color as CollectionColor]
                                      )}
                                      >{color}</SelectItem>
                                  ))
                                }
                            </SelectContent>
                         </Select>
                      </FormControl>
                      <FormDescription>Select a color from your collection</FormDescription>
                      <FormMessage />
                   </FormItem>
                 )}
              />
           </form>
        </Form>
        <div className='flex flex-col gap-3 mt-4'>
          <Separator />
          <Button 
            variant={'outline'}
           className={cn(
            form.watch('color') && 
              CollectionColors[form.getValues('color') as CollectionColor]
           )}
          onClick={form.handleSubmit(onSubmit)} type='submit'>Confirm</Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default CreateCollectionSheet