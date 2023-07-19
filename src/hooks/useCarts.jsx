import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useUser } from '../contexts/UserContext';
import { addOrUpdateToCart, getCart, removeFromCart } from '../api/firebase';

export default function useCarts() {
  const { uid } = useUser();
  const queryClient = useQueryClient();

  const cartsQuery = useQuery({
    queryKey: ['carts', uid || ''],
    queryFn: () => getCart(uid),
    staleTime: 1000 * 60,
    enabled: !!uid,
  });

  const addOrUpdateItem = useMutation({
    mutationFn: addedProduct => addOrUpdateToCart(uid, addedProduct),
    onSuccess: () => queryClient.invalidateQueries(['carts', uid]),
  });

  const removeItem = useMutation({
    mutationFn: id => removeFromCart(uid, id),
    onSuccess: () => queryClient.invalidateQueries(['carts', uid]),
  });

  return { cartsQuery, addOrUpdateItem, removeItem };
}
