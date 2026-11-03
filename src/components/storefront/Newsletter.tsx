'use client';

import {useState} from 'react';
import {VStack, HStack} from '@astryxdesign/core/Layout';
import {Section} from '@astryxdesign/core/Section';
import {Heading, Text} from '@astryxdesign/core/Text';
import {TextInput} from '@astryxdesign/core/TextInput';
import {Button} from '@astryxdesign/core/Button';
import {Banner} from '@astryxdesign/core/Banner';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | undefined>();
  const [done, setDone] = useState(false);

  return (
    <Section variant="muted" padding={8} id="newsletter" className="rounded-xl">
      <VStack gap={4} hAlign="center">
        <VStack gap={2} hAlign="center">
          <Heading level={2} justify="center">
            Get first dibs on new drops
          </Heading>
          <Text type="body" color="secondary" justify="center" textWrap="balance">
            One email a month. No spam. (Demo only: nothing is sent.)
          </Text>
        </VStack>
        {done ? (
          <Banner status="success" title="You're on the list" description={`We'll write to ${email}.`} />
        ) : (
          <form
            className="w-full max-w-md"
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
            <HStack gap={2} vAlign="end">
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
              <Button label="Subscribe" variant="primary" type="submit" />
            </HStack>
          </form>
        )}
      </VStack>
    </Section>
  );
}
