'use client';

import React from 'react';
import { Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Toaster, toast } from 'sonner';
import Image from 'next/image';

export default function BizumDialog() {
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText('+34 685 68 63 74');
      toast.success('Número copiado');
    } catch (error) {
      toast.error('No se pudo copiar');
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='bg-black hover:opacity-80 flex items-center justify-center gap-x-3 dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2'>
          Pagar
          <Image
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Bizum.svg/1280px-Bizum.svg.png?20220629153718'
            alt='undefined'
            width='50'
            height='50'
          />
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-md bg-white'>
        <DialogHeader>
          <DialogTitle>Bizum</DialogTitle>
          <DialogDescription>
            Copiar el número y realizar el Bizum desde la app del banco.
          </DialogDescription>
        </DialogHeader>
        <div className='flex items-center space-x-2'>
          <div className='grid flex-1 gap-2'>
            <Label htmlFor='link' className='sr-only'>
              Bizum
            </Label>
            <Input id='link' defaultValue='+34 685 68 63 74' readOnly />
          </div>
          <Button
            type='button'
            size='sm'
            className='px-3'
            onClick={copyToClipboard}
          >
            <span className='sr-only'>Copy</span>
            <Copy className='h-4 w-4' />
          </Button>
        </div>
        <DialogFooter className='sm:justify-start'>
          <DialogClose asChild>
            <Button type='button' variant='outline'>
              Cerrar
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
