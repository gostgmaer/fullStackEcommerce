"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import CustomerServices from '@/helper/network/services/CustomerServices';
import { notifyerror, notifySuccess } from '@/utils/notify/notice';

const AddressCard = ({ data }) => {
  const [csc, setCsc] = useState(null);
  const [pendingAction, setPendingAction] = useState(null);
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    import('country-state-city').then((mod) => {
      setCsc(mod);
    });
  }, []);

  if (!data) return null;

  const stateObj = csc && data.state && data.country
    ? csc.State.getStateByCodeAndCountry(data.state, data.country)
    : null;
  const countryObj = csc && data.country ? csc.Country.getCountryByCode(data.country) : null;

  const stateName = stateObj ? stateObj.name : data.state;
  const countryName = countryObj ? countryObj.name : data.country;

  const authHeaders = {
    Authorization: `Bearer ${session?.["accessToken"]}`,
  };

  const handleSetDefault = async () => {
    if (!session?.accessToken || pendingAction) {
      return;
    }

    try {
      setPendingAction('default');
      const response = await CustomerServices.setCustomerAddressDefault(authHeaders, { id: data._id });

      if (response?.statusCode === 200) {
        notifySuccess(response.message || 'Address set as default');
        router.refresh();
        return;
      }

      notifyerror(response?.message || 'Failed to set default address.');
    } catch (error) {
      notifyerror(error?.message || 'Failed to set default address.');
    } finally {
      setPendingAction(null);
    }
  };

  const handleDelete = async () => {
    if (!session?.accessToken || pendingAction) {
      return;
    }

    if (!window.confirm('Delete this address?')) {
      return;
    }

    try {
      setPendingAction('delete');
      const response = await CustomerServices.deleteCustomerAddress(authHeaders, { id: data._id });

      if (response?.statusCode === 200) {
        notifySuccess(response.message || 'Address deleted successfully');
        router.refresh();
        return;
      }

      notifyerror(response?.message || 'Failed to delete address.');
    } catch (error) {
      notifyerror(error?.message || 'Failed to delete address.');
    } finally {
      setPendingAction(null);
    }
  };

  return (
    <div className="group bg-muted/20 border border-border rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden flex flex-col min-h-[140px]">
      <div className="absolute top-4 right-4 flex items-center gap-2">
        {data.isDefault && (
          <span className="rounded-lg bg-emerald-100 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-emerald-700">
            Default
          </span>
        )}
        <Link
          className="bg-primary/10 hover:bg-primary text-primary hover:text-white transition-all text-xs font-bold px-3 py-1 rounded-lg shadow-sm active:scale-95 !no-underline"
          href={`/user/my-account/profile/update-address/${data._id}`}
        >
          Edit
        </Link>
      </div>
      <div className="flex-grow pr-12">
        <h5 className="leading-none mb-3 text-sm font-extrabold text-foreground">
          {data.firstName} {data.lastName}
        </h5>
        {data.phone && (
          <p className="text-xs text-muted-foreground mb-1">
            Phone: <span className="font-semibold text-foreground">{data.phone}</span>
          </p>
        )}
        {data.email && (
          <p className="text-xs text-muted-foreground mb-2">
            Email: <span className="font-semibold text-foreground">{data.email}</span>
          </p>
        )}
        <p className="text-xs text-muted-foreground leading-relaxed border-t border-border pt-2.5 mt-2">
          {data.address}, {data.city}, {stateName}, {countryName}, {data.postalCode}
        </p>
      </div>
      <div className="mt-4 flex flex-wrap gap-2 border-t border-border pt-3">
        <button
          className="rounded-lg border border-border px-3 py-1.5 text-xs font-bold text-foreground transition-colors hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-50"
          type="button"
          onClick={handleSetDefault}
          disabled={Boolean(data.isDefault) || pendingAction !== null}
        >
          {pendingAction === 'default' ? 'Saving...' : data.isDefault ? 'Default Address' : 'Set Default'}
        </button>
        <button
          className="rounded-lg border border-red-200 px-3 py-1.5 text-xs font-bold text-red-600 transition-colors hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-50"
          type="button"
          onClick={handleDelete}
          disabled={pendingAction !== null}
        >
          {pendingAction === 'delete' ? 'Deleting...' : 'Delete'}
        </button>
      </div>
    </div>
  );
};

export default AddressCard