import * as React from 'react';
import { createState, useState } from '@hookstate/core';

export const globalAuthState = createState<AuthState>({
  isLoading: true,
  isSignout: false,
  userToken: null,
});



export type AuthState = {
  userToken: string | null;
  isLoading: boolean;
  isSignout: boolean;
};

