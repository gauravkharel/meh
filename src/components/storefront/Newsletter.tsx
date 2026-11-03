'use client';

import {useState} from 'react';
import {VStack, HStack} from '@astryxdesign/core/Layout';
import {Text} from '@astryxdesign/core/Text';
import {TextInput} from '@astryxdesign/core/TextInput';
import {Button} from '@astryxdesign/core/Button';
import {Banner} from '@astryxdesign/core/Banner';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Compact newsletter signup with validation (demo: nothing is sent). */
export function Newsletter() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | undefined>();
  const [done, setDone] = useState(false);

  return (
    <VStack gap={2}>
      <Text type="label">First dibs on drops</Text>
      <Text type="supporting">One email a month. Demo only: nothing is sent.</Text>
      {done ? (
        <Banner status="success" title="You're on the list" description={`We'll write to ${email}.`} />
      ) : (
        <form
          noValidate
          onSubmit={e => {
            e.preventDefault();
            if (!EMAIL_RE.test(email)) {
              setError('Enter a valid email address');
              return;
            }
            setError(undefined);
            setDone(true);
          }}>
          <HStack gap={2} vAlign="start">
            <TextInput
              label="Email address"
              isLabelHidden
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              value={email}
              onChange={v => {
                setEmail(v);
                if (error) setError(undefined);
              }}
              status={error ? {type: 'error', message: error} : undefined}
              width="100%"
            />
            <Button label="Subscribe" variant="primary" type="submit" className="shrink-0 rounded-full" />
          </HStack>
        </form>
      )}
    </VStack>
  );
}
