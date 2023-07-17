import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useUser } from '../contexts/UserContext';
import { addOrUpdateToCart, getCart, removeFromCart } from '../api/firebase';

export default function useCarts() {
  const { user } = useUser();
  const queryClient = useQueryClient();

  const cartsQuery = useQuery({
    queryKey: ['carts', user.uid],
    queryFn: () => getCart(user.uid),
    staleTime: 1000 * 60,
  });

  const addOrUpdateItem = useMutation({
    mutationFn: addedProduct => addOrUpdateToCart(user.uid, addedProduct),
    onSuccess: () => queryClient.invalidateQueries(['carts', user.uid]),
  });

  const removeItem = useMutation({
    mutationFn: id => removeFromCart(user.uid, id),
    onSuccess: () => queryClient.invalidateQueries(['carts', user.uid]),
  });

  return { cartsQuery, addOrUpdateItem, removeItem };
}
