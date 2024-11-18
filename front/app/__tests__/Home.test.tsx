import { render, screen, waitFor, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Home from '../page'
import '@testing-library/jest-dom'
import { toast } from 'sonner'

jest.mock('sonner', () => ({
    toast: {
        error: jest.fn(),
        success: jest.fn(),
    },
    Toaster: () => null
}))

describe('Home Integration Tests', () => {
    const user = userEvent.setup()

    beforeEach(() => {
        jest.clearAllMocks()
    })

    it('devrait afficher des erreurs pour un formulaire invalide', async () => {
        render(<Home />)
        
        // Ouvrir le formulaire
        const loginButton = screen.getByRole('button', { name: /login/i })
        await user.click(loginButton)

        // Soumettre le formulaire vide
        const form = screen.getByRole('form')
        fireEvent.submit(form)

        // Vérifier que le toast est appelé
        await waitFor(() => {
            expect(toast.error).toHaveBeenCalled()
        })
    })

    it('devrait valider correctement les champs du formulaire', async () => {
        render(<Home />)

        // Ouvrir le formulaire
        const loginButton = screen.getByRole('button', { name: /login/i })
        await user.click(loginButton)

        // Remplir le formulaire avec des données invalides
        await user.type(screen.getByLabelText(/email/i), 'email-invalide')
        await user.type(screen.getByLabelText(/code postal/i), '123')

        // Soumettre le formulaire
        const form = screen.getByRole('form')
        fireEvent.submit(form)

        // Vérifier les messages d'erreur
        await waitFor(() => {
            const errors = screen.getAllByTestId('error-message')
            expect(errors.length).toBeGreaterThan(0)
        })
    })
})