import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { portable } from "@react-portable/core";

type Props = {
  cartCount: number;
};

const Component = ({ cartCount }: Props) => {
  return (
    <div className="group flex items-center p-2">
      <ShoppingBagIcon
        className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
        aria-hidden="true"
      />
      <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
        {cartCount}
      </span>
      {cartCount > 0 && (
        <span className="sr-only">items in cart, view bag</span>
      )}
    </div>
  );
};

export const CartIcon = portable(Component, "cart-icon");
